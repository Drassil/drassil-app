var Drassil = window.Drassil;

Drassil.parseNews = function(url) {

    $.getJSON( url, function( data ) {
      var title = [];
      var content = [];
      $.each( data, function( key, val ) {
        title.push(val['headline'].substring(12, val['headline'].length-2));
            content.push(val['content']);
      });

            for (var i = 0; i < title.length; i++) {
                    document.getElementById("title-"+[i+1]).innerHTML = title[i];
                    document.getElementById("content-"+[i+1]).innerHTML = content[i];
            };
    });

    $(document).ready(function() {
        $('.hidden2').fadeOut(1);
        $('.title, .content').removeClass('hidden');
        $('.title, .content').delay(1500).fadeIn(1000);
    });
};

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