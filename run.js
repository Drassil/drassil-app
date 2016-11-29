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
        var WebpackDevServer = require("webpack-dev-server");
        var webpack = require("webpack");
        var config = require(__dirname+"/webpack.config.js");
        var compiler = webpack(config);
        var server = new WebpackDevServer(compiler, {
            contentBase: __dirname,
            hot: true
        });
        server.listen(port, host);
    }
}

module.exports=run;