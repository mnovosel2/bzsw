/**
 * JSONLDController
 *
 * @description :: Server-side logic for managing JSONLDS
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var jld = require('jsonld'),
    jldContext = sails.config.ldContext,
    jldReq = require('jsonld-request');
module.exports = {
    getDefault: function(req, res) {
        res.send(JSON.stringify(sails.config.ldContent));
    },
    getCompact: function(req, res) {
        async.waterfall([
            function(cb2) {
                jld.compact(sails.config.ldContent, jldContext, function(err, compacted) {
                    if (err) {
                        sails.log(err);
                        return cb2(err);
                    }
                    res.send(JSON.stringify(compacted, null, 2));
                });
            }
        ], function(err) {
            sails.log(err);
            return res.send({});
        });
    },
    getFlatten: function(req, res) {
        jld.flatten(sails.config.ldContent, function(err, flattened) {
            if (err) {
                sails.log(err);
                return res.send({});
            }
            return res.send(JSON.stringify(flattened));
        });
    },
    getRDF: function(req, res) {
        jld.toRDF(sails.config.ldContent, {
            format: 'application/nquads'
        }, function(err, nquads) {
            if (err) {
                sails.log(err);
                return res.send({});
            }
            res.send(nquads);
        });
    },
  
    addSpouse: function(req, res) {
        var spousesLength = sails.config.ldContent["https://schema.org/spouse"].length,
            spouse = req.body;
        sails.log(spouse);
        sails.config.ldContent["https://schema.org/spouse"][spousesLength] = spouse;
        res.send({
            status: 200
        });
    },
    addChild: function(req, res) {
        var childInfo = req.body,
            spousesLength = sails.config.ldContent["https://schema.org/spouse"].length,
            spouseExist = false;
        for (var i = 0; i < spousesLength; i++) {
            var tmpSpouse = sails.config.ldContent["https://schema.org/spouse"][i];
            if (tmpSpouse["https://schema.org/name"] == childInfo["https://schema.org/spouse"]) {
            	sails.log("A");
            	if("https://schema.org/children" in tmpSpouse){
            		sails.log("B");
            		delete childInfo["https://schema.org/spouse"];
            		tmpSpouse["https://schema.org/children"].push(childInfo);

            	}else{
            		delete childInfo["https://schema.org/spouse"];
            		sails.log("C");
            		tmpSpouse["https://schema.org/children"]=[];
            		tmpSpouse["https://schema.org/children"].push(childInfo);
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
        res.send(400,{
        	status:400
        });
    }
};
