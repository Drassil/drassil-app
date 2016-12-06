var Drassil = window.Drassil;

var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from parent window
eventer(messageEvent, function (e) {
    var d = JSON.parse(e.data);
    
    switch (d.name) {
        case "something":
            // this is just an example for data comunication
            var data = d.data;
        break;
    }
}, false);

// 
function pgCall(fn_name,fn_data) {
    var pass_data = {name: fn_name, data : fn_data};

    parent.postMessage(JSON.stringify(pass_data), "*");
} 


function openExternal(url) {
    // use _system to open external links using in-app-browser cordova plugin
    //var win = window.open(url, '_system'); 
    //win.focus();
    pgCall("openExternal",{url: url});
}

Drassil.appClose = function() {
    pgCall("appClose");
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

Drassil.switchRealm = function (realmAfter) {

};

Drassil.setRealm = function(realm) {

};

Drassil.prepareRealm = function () {

};