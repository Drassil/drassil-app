function run(host, port, dev, callback) {
    var options = {};
    var fs = require("fs");
    var express = require("express");
    var path = require("path");

    if (dev) {
        // DEV MODE DOESN'T USE THE BUNDLED VERSION
        options = {
            index: "index-dev.html"
        };
    }

    // run webpack to keep the bundle files updated
    var webpack = require("webpack");

    var config = require(__dirname + "/webpack.config.js");
    var compiler = webpack(config);

    compiler.run(function (err, stats) {
        var expr = express();
        expr.use("/", express.static(__dirname, options)); //use static files in ROOT/public folder

        expr.use("/site/", express.static(path.join(__dirname, "site"), {index: "index.html"}));

        expr.get("/", function (request, response) { //root dir
            console.log(request, response);
        });

        console.log("Your webserver is listening on  " + host + ":" + port);
        expr.listen(port, host, callback);

        compiler.watch({}, function (err, stats) {
        });
    });
}

module.exports = run;