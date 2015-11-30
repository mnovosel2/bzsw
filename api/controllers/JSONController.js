/**
 * JSONController
 *
 * @description :: Server-side logic for managing JSONS
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var defaultJSON = sails.config.jsonContent;
module.exports = {
    getDefault: function(req, res) {
        res.send(defaultJSON);
    },
    addSpouse: function(req, res) {
        var spousesLength = defaultJSON.zene.length,
            spouse = req.body;
        defaultJSON.zene[spousesLength - 1] = spouse;
        res.send({
            status: 200
        });
    },
    addChild: function(req, res) {
        var childInfo = req.body,
            spousesLength = defaultJSON.zene.length,
            spouseExist = false;
        for (var i = 0; i < spousesLength; i++) {
            var tmpSpouse = defaultJSON.zene[i];
            if (tmpSpouse.ime == childInfo.zena) {
                sails.log("A");
                if ("djeca" in tmpSpouse) {
                    sails.log("B");
                    delete childInfo.zena;
                    tmpSpouse.djeca.push(childInfo);

                } else {
                    delete childInfo.zena;
                    sails.log("C");
                    tmpSpouse.djeca = [];
                    tmpSpouse.djeca.push(childInfo);
                }

                spouseExist = true;
                break;
            }
        }
        if (spouseExist) {
            return res.send({
                status: 200
            });
        }
        res.send(400, {
            status: 400
        });
    }
};
