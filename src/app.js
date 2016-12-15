var app=angular.module("DrassilApp",["ngRoute",'angular-loading-bar','angularVideoBg',"AngularXT"]);

app.config(['$routeProvider','$locationProvider','$ngxtProvider',function($routeProvider,$locationProvider,$ngxtProvider){
    var ngxt=$ngxtProvider;
    
    var deps=[
    ];
       
    deps.push("src/platform-"+Drassil.PLATFORM+"/api.js");
        
    $routeProvider
    .when("index.html", ngxt.routeComponent({templateUrl: function(attr) {
            return "/site/en/home/index.html";
    }, scriptUrls: deps, reloadOnSearch: false}))
    // old legacy url 
    .when("/site/en/home.html",{redirectTo: '/site/en/home'})
    .when("/site/en/newage.html",{redirectTo: '/site/en/newage'})
    .when("/site/it/azerothshard.html",{redirectTo: '/site/en/azerothshard'})
    // this rule will automatically set the path based on /site/ structure
    .when("/site/:page*", ngxt.routeComponent({templateUrl: function(attr) {
                var route=attr.page;

                if (!route.endsWith("index.html")) {
                    if (!route.endsWith("/")) {
                        route+="/";
                    }

                    route+="index.html";
                }

                return "/site/"+route;
        }, scriptUrls: deps, reloadOnSearch: false})
    )
    // otherwise
    .otherwise({redirectTo: '/site/en/home'});
        
    $locationProvider.html5Mode(true);
}]);

app.run(function($rootScope,$timeout,$location) {
    $rootScope.location = $location;
    
    $rootScope.$on("$viewContentLoaded",function() {
        $timeout(function() { // workaround to avoid async issues
            // removing all elements that are not suitable for other platforms
            if (window.Drassil.PLATFORM!=="browser") {
                $(".device-element").removeClass("device-element");
            }

            if (window.Drassil.PLATFORM==="cordova") {
                $(".cordova-element").removeClass("cordova-element");
            }

            if (window.Drassil.PLATFORM==="electron") {
                $(".electron-element").removeClass("electron-element");
            }

            if (window.Drassil.PLATFORM==="browser") {
                $(".browser-element").removeClass("browser-element");
            }
        },0);
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
        callback && callback(element);
    };

    document.registerElement(name, {prototype: proto});
};

