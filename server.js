/**
 * Server.js
 * This handles the actualy startup of the application as a webserver.
 * Apache, NGINX, and IIS can be used as a proxy to pass requests into the
 * applicaton. These services will typically assign a PORT number to the app
 * which NODE will interpret as `process.env.PORT`
**/
var app = require('./app'),
    port = process.env.PORT || 3030,
    env = process.env.NODE_ENV || "dev"
;

app.listen(port, function() {
    // only display this content in terminal if IISPort not passed in
    if (!process.env.PORT) {
        console.log("Server Running on Port: " + port);
        console.log("Server Environment: " + env);
    }
});
