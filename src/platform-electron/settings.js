if (window.module)
    module = window.module;

var electron = require('electron');
var Settings = electron.remote.require('./drassil-app/settings.js');
var settings = new Settings(electron.remote.getCurrentWindow());
var Drassil = electron.remote.getGlobal('Drassil');
var DrassilEct = electron.remote.require('./drassil-app/api.js');

settings.list().get('wowFolder.wowFolder').then(function (val) {
    if (val)
        $("#wowFolder").attr("placeholder", val.toString());
});

function selectWoWFolder() {
    var wowFolder = settings.selectWoWFolder();
    $("#wowFolder").attr("placeholder", wowFolder[0].toString());
    window.wowFolder = wowFolder[0];
}
;

function saveSettings() {
    settings.saveSettings(wowFolder);
}

