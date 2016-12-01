var Drassil = window.Drassil;

var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from parent window
eventer(messageEvent, function (e) {
    switch (e.data.msg) {
        case "something":
            // this is just an example for data comunication
            var data = e.data.data;
        break;
    }
}, false);

function openExternal(url) {
    var win = window.open(url, '_system');
    win.focus();
}

Drassil.appClose = function() {
    parent.postMessage("appClose", "*");
};

Drassil.appMinimize = function() {

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