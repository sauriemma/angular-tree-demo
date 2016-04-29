/**
 * Created by sauriemm on 3/21/2016.
 */

// Static is no longer available
// http://stackoverflow.com/questions/24346161/nodejs-connect-cannot-find-static
// Three choices:
// npm install connect@2.X.X
// npm install serve-static
// use express
// use gulp-connect https://www.npmjs.com/package/gulp-connect


// npm install connect@2.X.X
/*
console.log(__dirname);


var connect = require('connect');

var server = connect.createServer(
    connect.static(__dirname)
).listen(8080);

console.log('Listening on port: ' + server.address().port);
*/

// npm install serve-static


// use express
/*
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

app.listen(80);
*/

console.log("Running server.js from: " + __dirname);

var express = require('express');
var app = express();

var logger = function(req, res, next) {
    var d = new Date();
    var n = d.toLocaleString();
    console.log('Time: ' + n);
    console.log("Request from " + req.ip);
    console.log(req.path); // '/new'
    next(); // Passing the request to the next handler in the stack.
}

app.use(logger);

app.use(express.static(__dirname));

app.listen(8080, '127.0.0.1');

console.log('Listening on port: ' + 8080);

//console.log('Server running on %s', app.address().port);

