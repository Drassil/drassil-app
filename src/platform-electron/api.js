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
    DrassilEct.api.resetWoW();
};

Drassil.clearCache = function() {
    DrassilEct.api.clearCache();
};

Drassil.setRealm = function(realm) {
    DrassilEct.api.setRealm(realm);
};