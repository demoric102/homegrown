var Promise = require('bluebird');

var grants = {
    admin: [
        { action: 'create' },
        { action: 'read' },
        { action: 'update' },
        { action: 'delete' }
    ],
    registered: [
        { action: 'create' },
        { action: 'read' }
    ],
    public: [
        { action: 'read' }
    ]
};

var modelRestrictions = {
    user: [
        'Role',
        'Permission',
        'User',
        'Model',
        'Passport'
    ],
    supplier: [
        'Role',
        'Permission',
        'User',
        'Model',
        'Passport'
    ]
};

// TODO let users override this in the actual model definition

/**
 * Create default Role permissions
 */
exports.create = function (roles, models, admin) {
    return Promise.all([
        grantAdminPermissions(roles, models, admin),
        grantSupplierPermissions(roles, models, admin)
    ]).then(function (permissions) {
        return permissions;
    });
};

function grantAdminPermissions(roles, models, admin) {
    var adminRole = _.find(roles, { name: 'admin' });
    var permissions = _.flatten(_.map(models, function (modelEntity) {
        var model = sails.models[modelEntity.identity];
        return _.map(grants.admin, function (permission) {
            var newPermission = {
                model: modelEntity.id,
                action: permission.action,
                role: adminRole.id,
            };
            return Permission.findOrCreate(newPermission, newPermission);
        });
    }));
    return Promise.all(permissions);
}

function grantSupplierPermissions(roles, models, admin) {
    var registeredRole = _.find(roles, { name: 'user' });
    var permissions = [
        // {
        //     model: _.find(models, { name: 'Caterer' }).id,
        //     action: 'find',
        //     role: registeredRole.id
        // },
        // {
        //     model: _.find(models, { name: 'Food' }).id,
        //     action: 'find',
        //     role: registeredRole.id
        // },
        // {
        //     model: _.find(models, { name: 'Invoice' }).id,
        //     action: 'find',
        //     role: registeredRole.id
        // },
        {
            model: _.find(models, { name: 'Supplier' }).id,
            action: 'update',
            role: registeredRole.id
        },
        {
            model: _.find(models, { name: 'Invoice' }).id,
            action: 'create',
            role: registeredRole.id
        },
        {
            model: _.find(models, { name: 'Invoice' }).id,
            action: 'update',
            role: registeredRole.id
        },
    ];

    return Promise.all(
        _.map(permissions, function (permission) {
            return Permission.findOrCreate(permission, permission);
        })
    );
}
