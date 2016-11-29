var Drassil = window.Drassil;

Drassil.appClose = function () {

};

Drassil.appMinimize = function () {

};

Drassil.resetWoW = function () {

};

Drassil.openForum = function () {
    var forumUrl = Drassil.defines[Drassil.realm].forum;
    var win = window.open(forumUrl, '_blank');
    win.focus();
};
