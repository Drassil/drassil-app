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
    DrassilEct.api.openSite(realm);
};

Drassil.openForum = function(realm) {
    DrassilEct.api.openForum(realm);
};

Drassil.openAbout = function(realm) {
    DrassilEct.api.openAbout(realm);
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

Drassil.getNews = function() {
    DrassilEct.api.getNews();
};