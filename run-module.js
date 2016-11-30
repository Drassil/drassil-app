function run(host,port,dev) {
    var options = {};

    if (dev) {
        var fs = require("fs");
        var express = require("express");
        options = {
            index: "index-dev.html"
        };

        var expr = express();
        expr.use(express.static(__dirname, options)); //use static files in ROOT/public folder

        expr.get("/", function (request, response) { //root dir
        });

        expr.listen(port, host);
    } else {
        var webpack = require("webpack")
        var browersync = require("browser-sync")

        var config = require(__dirname+"/webpack.config.js");
        webpack(
            config
        , function(error, stats) {
            if(!!server && !!server.active) {
                server.reload();
            }
        })
        server = browersync({
            server: __dirname,
            port: port
        });
    }
}

module.exports=run;