var Drassil = window.Drassil;

Drassil.appClose = function() {

};

Drassil.appMinimize = function() {

};

function openExternal(url) {
    // on browser _blank is enough to open a new tab
    var win = window.open(url, '_blank'); 
    win.focus();
}

Drassil.openOtherSite = function(url)
{
    openExternal(url);
};

Drassil.openSite = function(realm) {
    var siteUrl = Drassil.defines[realm].website;
    openExternal(siteUrl);
};

Drassil.openForum = function(realm) {
    var forumUrl = Drassil.defines[realm].forum;
    openExternal(forumUrl);
};

Drassil.openAbout = function(realm) {
    var aboutUrl = Drassil.defines[realm].about;
    openExternal(aboutUrl);
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

Drassil.switchRealm = function (realmAfter) {

};

Drassil.prepareRealm = function () {

};