var Drassil= window.Drassil = window.Drassil || {}; // namespace for Drassil app

Drassil.defines={
    "azerothshard" : {
        "website" : "https://azerothshard.org/it/",
        "forum" : "https://azerothshard.org/it/forums/",
        "about" : "https://azerothshard.org/it/about",
        "settings" : "src/platform-electron/impostazioni.html",
        "news_json" : "https://azerothshard.org/it/wp-json/wp/v2/posts?per_page=6",
        "patches" : "http://maelstrom.altervista.org/apps/db-api/patches_azs",
        "chat_direct" : "https://discordapp.com/channels/108619239681716224/108619239681716224",
        "chat_invite" : "https://discord.gg/33FRWu5"
    },
    "newage" : {
        "website" : "http://wownewage.com",
        "forum" : "https://community.wownewage.com",
        "about" : "https://wownewage.com/about",
        "settings" : "src/platform-electron/settings.html",
        "news_json" : "https://wownewage.com/wp-json/wp/v2/posts?per_page=6",
        "patches" : "http://api.drassil.net/patches_newage",
        "chat_direct" : "https://discordapp.com/channels/202816741422792704/202816741422792704",
        "chat_invite" : "https://discord.gg/3rnHyWa"
    },
    "custom" : {
        "patches" : "http://api.drassil.net/nopatch",
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

    var electron = require("electron");
    var DrassilEct=electron.remote.getGlobal("DrassilEct");
    DrassilEct.webDefines=Drassil.defines;

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
