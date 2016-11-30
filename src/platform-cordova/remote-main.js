var appDomainUrl = appFramework.getConf("url");
// *
// * Non modificare i seguenti parametri...
// *
var appVersion = appFramework.getConf("version");
//var appDeviceId				=		device.uuid; // questo parametro in iOs cambia ad ogni installazione, TODO: usare plugin Cordova.
//var appDevicePlatform                   =		device.platform.toLowerCase();
//var appParams 				=		"?version="+appVersion+"&platform=phonegap&phoneID=" + appDeviceId + "&deviceplatform=" + appDevicePlatform;
var origUrl = appDomainUrl; //+ appParams;


// *
// * This function allows us to call methods from child iframe 
// * you can call it using:
// * parent.postMessage("one-string", "*");
// *
// * Note: this method is async
// *
appFramework.setMsgListener(function (e) {
    switch(e.data) {
        case "appClose":
            navigator.app.exitApp();
        break;
    }
});


// run external app
appFramework.loadExternal({
    onReady: function () {
        // restore original url ( can be changed by notifications )
        appFramework.setConf("url", origUrl);
    }
});



//# sourceURL=remote-main.js