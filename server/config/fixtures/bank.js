/**
 * Create admin user.
 * @param adminRole - the admin role which grants all permissions
 */
exports.create = function () {
    FlutterWaveService.getAvailableBanks().then(function (data) {
        return Promise.all(
            _.map(data, function (bank, code) {
                return Bank.findOrCreate({
                    name: bank,
                    code: code
                }, {
                        name: bank,
                        code: code
                    });
            })
        );
    });
};
