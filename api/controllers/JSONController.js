/**
 * JSONController
 *
 * @description :: Server-side logic for managing JSONS
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var defaultJSON=require('../../output/bozanstva.json');
module.exports = {
	getDefault:function(req,res){
		res.send(defaultJSON);
	}
};

