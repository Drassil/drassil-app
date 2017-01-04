// requirejs module ( for site )
// we can specify other dependecies loaded async
define([
    // site dependencies
    "src/platform-electron/jQueryMods.js"
], function (jQueryMods) {
    // electron dependencies
    var electron = window.nodeRequire('electron');
    var DrassilEct = electron.remote.require('./drassil-app/api.js');
    var Drassil = window.Drassil;
    var chatWin = null;

    Drassil.appClose = function () {
        DrassilEct.api.appClose();
    };

    Drassil.appMinimize = function () {
        DrassilEct.api.appMinimize();
    };

    Drassil.openOtherSite = function (url)
    {
        DrassilEct.api.openExternal(url);
    };

    Drassil.openSite = function (realm) {
        var siteUrl = Drassil.defines[realm].website;
        DrassilEct.api.openExternal(siteUrl);
    };

    Drassil.openChat = function (realm) {
        // avoid multiple opening
        if (!chatWin) {
            chatWin = new electron.remote.BrowserWindow({width: 800, height: 600, frame: true, webPreferences: {nodeIntegration: false}, parent: electron.remote.getCurrentWindow()});

            if (realm === 'azerothshard')
            {
                chatWin.loadURL(Drassil.defines.azerothshard.chat_invite);
            } else
            {
                //
            }

            chatWin.on('closed', function () {
                chatWin = null;
            });
        }
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
    
    Drassil.optionalOpen = function (Drassil) {
        DrassilEct.api.optionalOpen(Drassil);
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
            urlJSON = Drassil.defines.newage.patches;
        } else if (Drassil.realm === "azerothshard")
        {
            urlJSON = Drassil.defines.azerothshard.patches;
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

    Drassil.prepareRealm = function (currentRealm) {
        DrassilEct.api.switchRealm(currentRealm, new window.Drassil.jQueryMods(), electron.remote.getCurrentWindow());
    };

    return Drassil;
});
