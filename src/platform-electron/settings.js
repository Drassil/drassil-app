const {BrowserWindow} = require('electron').remote;
settingsWin = BrowserWindow.getFocusedWindow(); 
var settings = require('electron-settings');

settings.get('wowFolder.wowFolder').then(val => {
    if(val != undefined)
        $("#wowFolder").attr("placeholder", val.toString());
});
    
function appClose()
{
    settingsWin.close();
}

function appMinimize()
{
    settingsWin.minimize();
}

function selectWoWFolder(){
	const {dialog} = require('electron').remote
	wowFolder = dialog.showOpenDialog({properties: ['openDirectory']});
	$("#wowFolder").attr("placeholder", wowFolder[0].toString());
}

function getLauncherVer()
{
	var app = require('electron').remote.app;
	version = app.getVersion();
	//console.log(version);
	$("#info-version").html("Launcher Version: " +version);
}


function saveSettings(){
	const settings = require('electron-settings');

	settings.setSync('wowFolder', {
		'wowFolder': wowFolder[0]
	});
}
