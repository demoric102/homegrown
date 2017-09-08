/**
 * Create admin user.
 * @param adminRole - the admin role which grants all permissions
 */
exports.create = function () {
    var lgas = [
        { name: 'Adavi' },
        { name: 'Ajaokuta' },
        { name: 'Ankpa' },
        { name: 'Bassa' },
        { name: 'Dekina' },
        { name: 'Ibaji' },
        { name: 'Idah' },
        { name: 'Igalamela' },
        { name: 'Igalamela Odulu' },
        { name: 'Ijumu' },
        { name: 'Kabba/Bunu' },
        { name: 'Kogi' },
        { name: 'Lokoja' },
        { name: 'Mopa Muro' },
        { name: 'Ofu' },
        { name: 'Ogori/Magongo' },
        { name: 'Okehi' },
        { name: 'Okene' },
        { name: 'Olamaboro' },
        { name: 'Omala' },
        { name: 'Yagba East' },
        { name: 'Yagba West' }
    ];
    return Promise.all(
        _.map(lgas, function (lga) {
            return Lga.findOrCreate(lga, lga);
        })
    );
};
