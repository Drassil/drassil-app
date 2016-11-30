var app=angular.module("DrassilApp",["ngRoute",'angular-loading-bar','angularVideoBg',"AngularXT"]);

app.config(['$routeProvider','$locationProvider','$ngxtProvider',function($routeProvider,$locationProvider,$ngxtProvider){
    var ngxt=$ngxtProvider;
    
    var deps=[
    ];
       
    deps.push("src/platform-"+Drassil.PLATFORM+"/api.js");
        
    $routeProvider
    .when("/site/it/azerothshard.html",       ngxt.routeComponent({templateUrl: "site/it/azerothshard.html", scriptUrls: deps, reloadOnSearch: false}) )
    .when("/site/it/warcraft_tales.html",      ngxt.routeComponent({templateUrl: "site/it/warcraft_tales.html", scriptUrls: deps, reloadOnSearch: false}) )
    .when("/site/en/newage.html",   ngxt.routeComponent({templateUrl: "site/en/newage.html", scriptUrls: deps, reloadOnSearch: false}) )
    .when("/site/en/server-status.html",   ngxt.routeComponent({templateUrl: "/site/en/server-status.html", scriptUrls: deps, reloadOnSearch: false}) )
    .when("/site/en/home.html",   ngxt.routeComponent({templateUrl: "site/en/home.html", scriptUrls: deps, reloadOnSearch: false}) )
    .otherwise(               {redirectTo: '/site/en/home.html'});
        
    $locationProvider.html5Mode(true);
}]);

app.run(function($rootScope) {
    $rootScope.$on("$routeChangeSuccess",function() {
        // removing all elements that are not suitable for other platforms
        if (window.Drassil.PLATFORM==="browser") {
            $(".device-element").hide();
        }

        if (window.Drassil.PLATFORM!=="cordova") {
            $(".cordova-element").hide();
        }

        if (window.Drassil.PLATFORM!=="electron") {
            $(".electron-element").hide();
        }
    });
    
    /*$rootScope.$on("$routeChangeStart", function($event,$next, $previousRoute) {
        if ($previousRoute != null && $next.$$route.templateUrl != $previousRoute.loadedTemplateUrl 
                && $next.$$route.templateUrl == "site/it/home.html") {
            window.location.reload(true);
        }
    });*/
});

window.registerComponent = function(name, withShadow,callback) {
    // native : polyfill
    var mainDoc = document._currentScript ? document._currentScript.ownerDocument : document.currentScript.ownerDocument;

    var proto = Object.create(HTMLElement.prototype);

    proto.createdCallback = function () {
        var element = withShadow === true ? this.createShadowRoot() : this;
        // Grab DOM from doc.html's document.
        var text = mainDoc.querySelector("#" + name);
        element.innerHTML = text.cloneNode(true).innerHTML;
        callback && callback();
    };

    document.registerElement(name, {prototype: proto});
};

