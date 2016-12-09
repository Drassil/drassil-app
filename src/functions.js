var Drassil = window.Drassil;

function print(string) {
    console.log(string);
    document.write(string);
}

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

Drassil.parseNews = function(url) {

    $.getJSON( url, function( data ) {
      var title = [];
      var content = [];
      var newsLink = [];
      $.each( data, function( key, val ) {
        console.log(val['title']['rendered']);
        console.log(val['excerpt']['rendered']);
        console.log(val['link']);
        title.push(val['title']['rendered']);
        content.push(val['excerpt']['rendered']);
        newsLink.push(val['link']);
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


