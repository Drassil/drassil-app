var run = require("./run-module.js");

var type=process.argv[2];

var run_conf=null;
try {
    var run_conf = require("./run-conf.js");
} catch(e) {
    var run_conf = require("./run-conf.def.js");
}

run(run_conf.host,run_conf.port, type === "dev");
