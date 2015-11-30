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
        toJson(req.rawBody, function(err, data) {
            if (err) {
                sails.log(err);
                return res.send(500, {
                    status: 500
                });
            }
            sails.log(data);
            console.log(JSON.stringify(data));
        });
    },
};
