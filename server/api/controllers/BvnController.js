/**
 * BvnController
 *
 * @description :: Server-side logic for managing Bvns
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');
module.exports = {
    verify: function (req, res) {
        req.validate({
            bvn: "string",
            otpoption: "string"
        });
        var reqData = actionUtil.parseValues(req);
        FlutterWaveService.verifyBvn(reqData).then(function (response) {
            return res.ok(response);
        }).catch(function (reason) {
            return res.negotiate(reason);
        });
    },
};
