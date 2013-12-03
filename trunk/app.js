
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');

var http = require('http');
var path = require('path');

var app = express();


// Set View Engine
app.engine('html', require('hogan-express'));

// By default, Express will use a generic HTML wrapper (a layout) to render all your pages. If you don't need that, turn it off.

app.set('view options', {layout: true});

// Set the layout page. Layout page needs {{{ yield }}}  where page content will be injected

app.set('layout', 'layouts/main_layout');

app.enable('view cache');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
// app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/secondpage', routes.secondpage);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
