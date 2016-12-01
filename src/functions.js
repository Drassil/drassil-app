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
