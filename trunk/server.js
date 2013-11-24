var http = require('http');
var sys = require('sys');
var url = require('url');
var mustache = require('./libs/mustache');
var _ = require('./libs/underscore');

function start(route) {
    function onRequest(request, response) {

        // route stuff
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        // send to router.js to route
        route(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});

        // UNDERSCORE.JS PRACTICE
        var scores = [84, 99, 91, 65, 87, 55, 72, 68, 95, 42],
            topScorers = [],
            scoreLimit = 90;

        topScorers = _.select(scores, function(score){
            return score > scoreLimit;
        });
        console.log(topScorers);






        // MUSTACHE.JS PRACTICE
        var view = {
            title: "Jeff",
            calc: function() {
                return 2 + 8;
            }
        };

        var template = "{{title}} spends {{calc}}";
        var html = mustache.render(template, view);
        response.write(html);

        // end
        response.end();

    }

    http.createServer(onRequest).listen(8888,'127.0.0.1');
    console.log('Server has started.');
}

exports.start = start;