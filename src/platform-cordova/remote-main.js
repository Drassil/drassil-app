
// *
// * Non modificare i seguenti parametri...
// *
var appVersion = appFramework.getConf("version");
//var appDeviceId				=		device.uuid; // questo parametro in iOs cambia ad ogni installazione, TODO: usare plugin Cordova.
//var appDevicePlatform                   =		device.platform.toLowerCase();
//var appParams 				=		"?version="+appVersion+"&platform=phonegap&phoneID=" + appDeviceId + "&deviceplatform=" + appDevicePlatform;
var origUrl = appDomainUrl; //+ appParams;

// run external app
appFramework.loadExternal({
    onReady: function () {
        // restore original url ( can be changed by notifications )
        appFramework.setConf("url", origUrl);
    }
});

//# sourceURL=drassil_browser.js