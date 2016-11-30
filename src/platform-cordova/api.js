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

Drassil.appClose = function() {
    parent.postMessage("appClose", "*");
};

Drassil.appMinimize = function() {

};

Drassil.openSite = function(realm) {

};

Drassil.openForum = function(realm) {

};

Drassil.openAbout = function(realm) {

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

Drassil.getNews = function() {

};


								$('.upload_image_cordova').click(function(){
									parent.postMessage("camera", "*");
								});

	