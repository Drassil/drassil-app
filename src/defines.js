var Drassil= window.Drassil = window.Drassil || {}; // namespace for Drassil app

Drassil.defines={
    "azerothshard" : {
        "website" : "https://azerothshard.org",
        "forum" : "https://azerothshard.org/forums/",
        "about" : "https://azerothshard.org/about",
        "settings" : "src/platform-electron/impostazioni.html"
    },
    "newage" : {
        "website" : "http://wownewage.com",
        "forum" : "http://community.wownewage.com",
        "about" : "http://wownewage.com/about",
        "settings" : "src/platform-electron/settings.html",
        "news_json" : "http://api.wownewage.com/articles/?&limit=6&by=id&order=desc",
    },
    "drassil" : {
        "website" : "http://warcraft.drassil.net",
        "forum" : "http://forum.drassil.net",
        "about" : "http://drassil.net",
        "settings" : "src/platform-electron/settings.html"
    }
};


function getQueryParam(param) {
    var result =  window.location.search.match(
        new RegExp("(\\?|&)" + param + "(\\[\\])?=([^&]*)")
    );

    return result ? result[3] : false;
}

// dynamic base
console.log("//"+document.location.host +location.pathname);
document.write("<base href='//"+document.location.host + location.pathname+"' />");

if ((window && window.cordova) || getQueryParam("platform") === "cordova") {
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

console.log("Running on platform: "+Drassil.PLATFORM);

