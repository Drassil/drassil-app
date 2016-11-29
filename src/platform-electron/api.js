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

Drassil.settingsOpen = function() {
    DrassilEct.api.settingsOpen();
};

Drassil.checkFirstStart = function() {
    DrassilEct.api.checkFirstStart();
};

Drassil.getLauncherVersion = function() {
    DrassilEct.api.getLauncherVersion();
};

Drassil.saveSettings = function() {
    DrassilEct.api.saveSettings();
};

Drassil.setFolderPlaceholder = function() {
    DrassilEct.api.setFolderPlaceholder();
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