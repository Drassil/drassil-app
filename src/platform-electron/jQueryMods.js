// requirejs module ( for site )
(function() {
    function jQueryMods() {    };
    
    jQueryMods.prototype.fadeInDownloadBar = function() {
        $(document).ready(function() {
            $('.download').removeClass('hidden');
            $('.download').delay(1500).fadeIn(1000);
        });
    };

    jQueryMods.prototype.fadeOutDownloadBar = function()
    {
        $(document).ready(function() {
            $('.download').delay(1500).fadeOut(1000);
        });
    };

    jQueryMods.prototype.fadeOutPlayButton = function()
    {
        $(document).ready(function() {
            $("#play-btn").text("Wait...");
        });
    };
    
    jQueryMods.prototype.fadeInPlayButton = function()
    {
        $(document).ready(function() {
            $("#play-btn").text("Play");
            $("#play-btn").attr("onclick", "Drassil.launchWoW(Drassil.realm)");
        });
    };
    
    jQueryMods.prototype.downloadPercentage = function(downloadedMB,name,realPercent,totalMB)
    {
        $("#dataDownload").html("Data downloaded: "+downloadedMB+ " MB / "+totalMB +" MB");
        $("#patchDownload").html("File: "+name);
        $(".progress-bar").html(realPercent+' %');
        $(".progress-bar").attr("aria-valuenow", realPercent);
        $(".progress-bar").attr("style", "width:"+realPercent+"%");
    };
    
    jQueryMods.prototype.switchToUninstallButton = function(patchName)
    {
        $(document).ready(function() {
            $("#"+patchName).text("Remove");
            $("#"+patchName).parent().attr("onclick", "optional.uninstallPatch('"+patchName+"')");
            $("#"+patchName+"-disable").parent().attr("onclick", "optional.disablePatch('"+patchName+"')");
            $("#"+patchName+"-disable").attr("style", "opacity:1 !important; pointer-events:auto !important;");
        });
    };
    
    jQueryMods.prototype.disableDisableButton = function()
    {
        $(document).ready(function() {
            $("#disable").attr("disabled", "disabled");
        });
    };
    
    jQueryMods.prototype.getJSON = function(url, callback)
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