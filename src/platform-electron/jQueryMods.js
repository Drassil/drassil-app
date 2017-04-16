// requirejs module ( for site )
(function () {
    function jQueryMods() { }
    ;

    jQueryMods.prototype.fadeInDownloadBar = function () {
        $(document).ready(function () {
            $('.download').removeClass('hidden');
            $('.download').delay(1500).fadeIn(1000);
        });
    };

    jQueryMods.prototype.fadeOutDownloadBar = function ()
    {
        $(document).ready(function () {
            $('.download').delay(1500).fadeOut(1000);
        });
    };

    jQueryMods.prototype.fadeOutPlayButton = function ()
    {
        $(document).ready(function () {
            $("#play-btn").text("Wait...");
        });
    };

    jQueryMods.prototype.fadeInPlayButton = function ()
    {
        $(document).ready(function () {
            $("#play-btn").text("Play");
            $("#play-btn").attr("onclick", "Drassil.launchWoW(Drassil.realm)");
        });
    };

    jQueryMods.prototype.downloadPercentage = function (downloadedMB, name, realPercent, totalMB)
    {
        $("#dataDownload").html("Data downloaded: " + downloadedMB + " MB / " + totalMB + " MB");
        $("#patchDownload").html("File: " + name);
        $(".progress-bar").html(realPercent + ' %');
        $(".progress-bar").attr("aria-valuenow", realPercent);
        $(".progress-bar").attr("style", "width:" + realPercent + "%");
    };

    jQueryMods.prototype.switchToUninstallButton = function (name, type = 0) //type = 0 -> patch || type = 1 -> addons
    {
        console.log(name+' '+type);
        if(type === 1)
        {
            $(document).ready(function () {
                $("#" + name).text("Remove");
                $("#" + name).attr("onclick", "optional.uninstallAddons('" + name + "')");
                $("#" + name + "-disable").attr("style", "opacity:1 !important; pointer-events:auto !important;");
            });
        }
        else
        {
            $(document).ready(function () {
                $("#" + name).text("Remove");
                $("#" + name).attr("onclick", "optional.uninstallPatch('" + name + "')");
                $("#" + name + "-disable").attr("onclick", "optional.backupPatch('" + name + "')");
                $("#" + name + "-disable").attr("style", "opacity:1 !important; pointer-events:auto !important;");
            });
        }
    };
    
    jQueryMods.prototype.switchToInstallButton = function (name, type = 0) //type = 0 -> patch || type = 1 -> addons
    {
        if(type = 1)
        {
            $(document).ready(function () {
                $("#" + name).text("Install");
                $("#" + name).attr("onclick", "optional.installAddons('" + name + "')");
                $("#" + name + "-disable").removeAttr("onclick");
                $("#" + name + "-disable").attr("style", "opacity: 0.3 !important; pointer-events:none !important;");
            });
        }
        else
        {
            $(document).ready(function () {
                $("#" + name).text("Install");
                $("#" + name).attr("onclick", "optional.installPatch('" + name + "')");
                $("#" + name + "-disable").removeAttr("onclick");
                $("#" + name + "-disable").attr("style", "opacity: 0.3 !important; pointer-events:none !important;");
            });
        }
        
    };


    jQueryMods.prototype.switchToRestartBtn = function (name) {
        $(document).ready(function () {
            $("#" + name).text("Restart required...");
            $("#" + name).attr("disabled", "true");
        });
    };

    jQueryMods.prototype.disableDisableButton = function ()
    {
        $(document).ready(function () {
            $("#disable").attr("disabled", "disabled");
        });
    };

    jQueryMods.prototype.getJSON = function (url, callback)
    {
        if (url) {
            $.getJSON(url, function (data) {
                callback(data);
            });
        }
    }

    window.Drassil.jQueryMods = jQueryMods;

    return jQueryMods;
})();