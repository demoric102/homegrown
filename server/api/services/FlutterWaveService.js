/**
 * Created by Toni on 11/9/2016.
 */

var transport = sails.config.defaults.mail_config;
var Flutterwave = require("flutterwave");
var flutterwave = new Flutterwave(sails.config.defaults.gateway_config.auth.apiKey, sails.config.defaults.gateway_config.auth.secret, true);

module.exports = {

    verifyBvn: function (data) {
        var promise = new Promise(function (resolve, reject) {
            flutterwave.BVN.verify(data.otpoption, data.bvn, function (err, res, body) {
                if (err) {
                    reject(err)
                }
                resolve(body.data)
            });
        });
        return promise;
    },
};

