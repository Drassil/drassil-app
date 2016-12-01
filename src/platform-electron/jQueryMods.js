module.exports = {
        
        fadeInDownloadBar: function()
        {
            $(document).ready(function() {
                $('.download').removeClass('hidden');
                $('#play-btn').removeClass('hidden');
                $('.download').delay(1500).fadeIn(1000);
            });
        },

        fadeOutDownloadBar: function()
        {
            $(document).ready(function() {
                $('.download').delay(1500).fadeOut(1000);
                $('#play-btn').delay(1500).fadeIn(1000);
            });
        },

        fadeInPlayButton: function()
        {
            $(document).ready(function() {
                $('#play-btn').removeClass('hidden');
                $('#play-btn').fadeIn(1000);
            });
        },

        downloadPercentage: function(downloadedMB, totalMB, name, realPercent)
        {
            $("#dataDownload").html("Data downloaded: "+downloadedMB+ " MB / "+totalMB +" MB");
            $("#patchDownload").html("File: "+name);
            $(".progress-bar").html(realPercent+' %');
            $(".progress-bar").attr("aria-valuenow", realPercent);
            $(".progress-bar").attr("style", "width:"+realPercent+"%");
        }
        
};