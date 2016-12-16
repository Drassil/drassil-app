// requirejs module ( for site )
define(function() {
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
                $("#play-btn").attr("disabled", "disabled");
        });
    };
    
    jQueryMods.prototype.fadeInPlayButton = function()
    {
        $(document).ready(function() {
                $("#play-btn").text("PLAY!");
                $("#play-btn").removeAttr("disabled");
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
    
    jQueryMods.prototype.getJSON = function(url, callback)
    {
        if (url) {
            $.getJSON(url, function (data) {
                callback(data);
            });
        }
    }

    return jQueryMods;
});