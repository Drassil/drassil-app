var electron = window.nodeRequire('electron');
var DrassilEct = electron.remote.require('./drassil-app/api.js');

var Drassil = window.Drassil;

Drassil.appClose = function() {
    DrassilEct.api.appClose();
};

Drassil.appMinimize = function() {
    DrassilEct.api.appMinimize();
};

Drassil.openSite = function(realm) {
    var siteUrl = Drassil.defines[realm].website;
    DrassilEct.api.openExternal(siteUrl);
};

Drassil.openForum = function(realm) {
    var forumUrl = Drassil.defines[realm].forum;
    DrassilEct.api.openExternal(forumUrl);
};

Drassil.openAbout = function(realm) {
    var aboutUrl = Drassil.defines[realm].about;
    DrassilEct.api.openExternal(aboutUrl);
};

Drassil.settingsOpen = function(Drassil) {
    DrassilEct.api.settingsOpen(Drassil);
};

Drassil.checkFirstStart = function() {
    DrassilEct.api.checkFirstStart();
};

Drassil.launchWoW = function(realm) {
    DrassilEct.api.launchWoW(realm);
};

Drassil.resetWoW = function() {
    if (Drassil.realm === "newage")
    {
        urlJSON = "http://api.wownewage.com/patches";
    } else if (Drassil.realm === "azerothshard")
    {
        urlJSON = "http://ardb.api.azerothshard.org/index.php/patches";
    } else
    {
        urlJSON = null;
    }
    if (urlJSON) {
        $.getJSON(urlJSON, function (data) {
            DrassilEct.api.resetWoW(data);
        });
    }
};

Drassil.clearCache = function() {
    DrassilEct.api.clearCache();
};

Drassil.setRealm = function(realm) {
    DrassilEct.api.setRealm(realm);
};

Drassil.prepareRealm = function() {
    
    var patchDownloader=require("./drassil-app/patchDownloader.js");
    
    if (Drassil.realm === "newage")
    {
        urlJSON = "http://api.wownewage.com/patches";
    } else if (Drassil.realm === "azerothshard")
    {
        urlJSON = "http://ardb.api.azerothshard.org/index.php/patches";
    } else
    {
        urlJSON = null;
    }
    if (urlJSON) {
        $.getJSON(urlJSON, function (data) {
            patchDownloader.parsePatch(data);
        });
    }
};