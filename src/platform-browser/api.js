var Drassil = window.Drassil;

Drassil.appClose = function() {
    parent.postMessage("appClose", "*");
};

Drassil.appMinimize = function() {

};

Drassil.openSite = function(realm) {
    var siteUrl = Drassil.defines[realm].website;
    var win = window.open(siteUrl, '_blank');
    win.focus();
};

Drassil.openForum = function(realm) {
    var forumUrl = Drassil.defines[realm].forum;
    var win = window.open(forumUrl, '_blank');
    win.focus();
};

Drassil.openAbout = function(realm) {
    var aboutUrl = Drassil.defines[realm].about;
    var win = window.open(aboutUrl, '_blank');
    win.focus();
};

Drassil.settingsOpen = function(Drassil) {

};

Drassil.checkFirstStart = function() {

};

Drassil.launchWoW = function(realm) {

};

Drassil.resetWoW = function() {

};

Drassil.clearCache = function() {

};

Drassil.setRealm = function(realm) {

};