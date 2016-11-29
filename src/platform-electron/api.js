var electron = window.nodeRequire('electron');
var DrassilEct = electron.remote.require('./drassil-app/api.js');

var Drassil = window.Drassil;

Drassil.appClose = function() {
    DrassilEct.api.appClose();
};

Drassil.appMinimize = function() {
    DrassilEct.api.appMinimize();
};

Drassil.resetWoW = function() {
    DrassilEct.api.resetWoW();
};

Drassil.openForum = function() {
    var forumUrl=Drassil.defines[Drassil.realm].forum;
    DrassilEct.api.openForum(forumUrl);
};
