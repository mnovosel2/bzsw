/**
 * XMLController
 *
 * @description :: Server-side logic for managing XMLS
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var defaultJSON = sails.config.jsonContent,
    parser = require('xml2json'),
    toXml = require('xmljson').to_xml,
    toJson = require('xmljson').to_json;
module.exports = {
    getDefault: function(req, res) {
        toXml(JSON.stringify(defaultJSON), function(err, xml) {
            if (err) {
                sails.log(err);
                return res.send(500, {
                    status: 500
                });
            }
            res.send(xml);
        });
    },
    addSpouse: function(req, res) {
        var spouse = {},
            spousesLength = defaultJSON.zene.length;
        toJson(req.rawBody, function(err, data) {
            if (err) {
                sails.log(err);
                return res.send(500, {
                    status: 500
                });
            }
            spouse.ime = data.item.ime;
            spouse.bozanstvo=data.item.bozanstvo;
            spouse.slika=data.item.slika;
            spouse.djeca=data.item.djeca || [];

            sails.log(spouse);
            defaultJSON.zene[spousesLength - 1] = spouse;
            res.send({
                status: 200
            });
        });
    },
    addChild: function(req, res) {
        var childInfo = {},
            spousesLength = defaultJSON.zene.length,
            spouseExist = false;
        toJson(req.rawBody, function(err, data) {
            if (err) {
                sails.log(err);
                return res.send(500, {
                    status: 500
                });
            }
            childInfo=data.item;
            for (var i = 0; i < spousesLength; i++) {
                var tmpSpouse = defaultJSON.zene[i];
                if (tmpSpouse.ime == childInfo.zena) {
                    if ("djeca" in tmpSpouse) {
                        delete childInfo.zena;
                        tmpSpouse.djeca.push(childInfo);

                    } else {
                        delete childInfo.zena;
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
        });
    }
};
