// requirejs module ( for site )
// we can specify other dependecies loaded async
define([
    // site dependencies
    "src/platform-electron/jQueryMods.js"
], function (jQueryMods) {
    // electron dependencies
    var electron = window.nodeRequire('electron');
    var DrassilEct = electron.remote.require('./drassil-app/api.js');
    var PatchDownloader = electron.remote.require("./drassil-app/PatchDownload.js");
    var Drassil = window.Drassil;

    Drassil.appClose = function () {
        DrassilEct.api.appClose();
    };

    Drassil.appMinimize = function () {
        DrassilEct.api.appMinimize();
    };

    Drassil.openOtherSite = function(url)
    {
        DrassilEct.api.openExternal(url);
    }
    
    Drassil.openSite = function (realm) {
        var siteUrl = Drassil.defines[realm].website;
        DrassilEct.api.openExternal(siteUrl);
    };

    Drassil.openForum = function (realm) {
        var forumUrl = Drassil.defines[realm].forum;
        DrassilEct.api.openExternal(forumUrl);
    };

    Drassil.openAbout = function (realm) {
        var aboutUrl = Drassil.defines[realm].about;
        DrassilEct.api.openExternal(aboutUrl);
    };

    Drassil.settingsOpen = function (Drassil) {
        DrassilEct.api.settingsOpen(Drassil);
    };

    Drassil.checkFirstStart = function () {
        DrassilEct.api.checkFirstStart();
    };

    Drassil.launchWoW = function (realm) {
        DrassilEct.api.launchWoW(realm);
    };

    Drassil.resetWoW = function () {
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

    Drassil.clearCache = function () {
        DrassilEct.api.clearCache();
    };

    Drassil.setRealm = function (realm) {
        DrassilEct.api.setRealm(realm);
    };
    
    Drassil.switchRealm = function (realmAfter) {
        DrassilEct.api.switchRealm(realmAfter, new jQueryMods());
    };

    Drassil.prepareRealm = function () {
        
        var patchDownload = new PatchDownloader(electron.remote.getCurrentWindow(), new jQueryMods());
       

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
                patchDownload.initializeDownload(data);
            });
        }
    };

    return Drassil;
});