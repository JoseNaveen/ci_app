
/**
 * Module dependencies.
 */

var app = require('./server/server');
var express = require('express')
var path = require('path');
var http = require('http')
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
