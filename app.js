/**
 * App.js
 * This is the main application for our RESTful API. It acts like a jumping off
 * Point for all endPoints and Controllers.
**/

var express = require('express'), // Our FrameWork
    app = express(), // Our Application
    morgan = require('morgan'), // Apache Like Logging Library
    fs = require('fs'), // File System Library that is Built into Node
    pkg = JSON.parse(fs.readFileSync(__dirname + '/package.json', 'utf8'))
;


/**
 * Setup the Mogan Logger
**/
if (!fs.existsSync("./logs/")) { fs.mkdirSync("./logs/"); }
var accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', { flags: 'a' });
app.use(morgan('combined', {
    stream: accessLogStream
}));


/**
 * Setup the Application
**/
app.set('view engine', 'jade');

app.set("title", pkg.name || "No Title Set");
app.set("cssFiles", ["/css/"+pkg.name+".min.css"]);
app.set("jsFiles", ["/js/bootstrap.min.css", "/js/"+pkg.name+".min.css"]);


/**
 * Setup the Routes
**/
app.use(express.static(__dirname + '/public'));
app.use('/', require('./routes/index'));

// Catch All
app.all('*', function(request, response, next){
    // if this is being hit, than endpoint doesnt exists.
    // throw a 404
    var error = new Error();
    error.status = 404;
    error.message = "Page Not Found"
    next(error);
});


/**
 * Setup Error Handling
**/
app.use(function(error, request, response, next) {
    response.render('error', {
        error: error
    });
});

// Export this express application to Node.JS to use
module.exports = app;
