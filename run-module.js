function run(host,port,dev) {
    var options = {};
    var fs = require("fs");
    var express = require("express");

    if (dev) {
        // DEV MODE DOESN'T USE THE BUNDLED VERSION
        options = {
            index: "index-dev.html"
        };
    } else {
        // Webpack for production
        var webpack = require("webpack")

        var config = require(__dirname+"/webpack.config.js");
        webpack(config);
    }
    
    
    var expr = express();
    expr.use(express.static(__dirname, options)); //use static files in ROOT/public folder

    expr.get("/", function (request, response) { //root dir

    });

    console.log("Your webserver is listening on  "+host+":"+port);
    expr.listen(port, host);
}

module.exports=run;