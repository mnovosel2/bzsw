var express = require('express');
module.exports.express = {

  bodyParser: function (options) {

    // Get default body parser from Express
    var defaultBodyParser = express.bodyParser(options);

    // Get function for consumung raw body, yum.
    var getBody = require('raw-body');

    var xmlParser = require('express-xml-bodyparser')({
      // options will apply to is-type
      type: ['xml'],
      limit: '1mb',
      encoding: 'utf8',
      trim: false
    });
    return function (req, res, next) {

        // If it looks like XML, parse it as XML
        if (req.headers && (req.headers['content-type'] == 'text/xml' || req.headers['content-type'] == 'application/xml')) {

          return xmlParser(req, res, next);
        }
      /*
      if (!req.headers['content-type'] ||
        req.headers['content-type'].match('text/plain')) {


        req._body = true;

        getBody(req, {
          limit: 100000,
          expected: req.headers['content-length']
        }, function (err, buf) {
          if (err) return next(err);


          buf = buf.toString('utf8').trim();


          req.body = buf.length ? {content: buf} : {};
          next();
        });
      }*/

      // Otherwise try the default parsers
      else return defaultBodyParser(req, res, next);
    };
  }
}
