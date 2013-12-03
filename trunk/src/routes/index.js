var http = require('http');
var request = require('request');
var render = require('../custom_modules/render.js');

/*
 * GET home page.
 */
exports.homepage = function (req, res) {

    render.renderHomepage( res, null );
//    request({
//        headers: {'content-type' : 'application/json'},
//        url: "http://www.mycinsay.com/services/rest/categoryLoad/",
//        method: "POST",
//        body: '{"maxResults":9999,"publicCategoryOnly":true}'
//    }, function(error, response, body) {
//
//        render.renderHomepage( res, body );
//
//    });

};


