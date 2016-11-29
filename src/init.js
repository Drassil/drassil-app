var Drassil= window.Drassil = window.Drassil || {}; // namespace for Drassil app

// dynamic base
document.write("<base href='//"+document.location.host +'/'+location.pathname+"' />");

if (window && window.cordova) {
    //
    // running under cordova
    //
    Drassil.PLATFORM="cordova";
} else if (window && window.process && window.process.type && process.versions['electron']) {
    //
    // running under electron
    //
    Drassil.PLATFORM="electron";
    
    // avoid conflicts with requirejs/webpack
    window.nodeRequire = require;
    delete window.require;
} else {
    //
    // browser or other platform
    //
    Drassil.PLATFORM="browser";
}

console.log("Platform: "+Drassil.PLATFORM);
