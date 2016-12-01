(function () {
    function patchDownloader(curWindow)
    {
        this.patchDownloaderWin = curWindow;
        this.settings = require('electron-settings');
        this.md5File = require('md5-file');
        this.server = settings.getSync('defaultRealm.defaultRealm');
        this.fs = require('fs');
        this.urlJSON;
        this.http = require('http');
    
        if(server == "newage")
        {
            urlJSON = "http://api.wownewage.com/patches";
        }
        else if(server == "azs")
        {
            urlJSON = "http://ardb.api.azerothshard.org/index.php/patches";
        }
        else
        {
            urlJSON = null;
        }
    };

    patchDownloader.prototype.parsePatch = function(data)
    {
        $.getJSON( urlJSON, function( data ) {
          var name = [];
          var linkDownload = [];
          var hash = [];
          var toUpdate = [];
          var toUpdate_name = [];
          
          
          for(key in data) {
            var val=data[key];
            name.push(val['name']);
            linkDownload.push(val['link']);
            hash.push(val['hash']);
          };

            if(wowFolder != undefined)
            {
                this.repeater(0, name, linkDownload, hash, toUpdate, toUpdate_name);
            }else{
                //non fare niente
            }	
        });
    };


    patchDownloader.prototype.repeater = function(i, name, linkDownload, hash, toUpdate, toUpdate_name) {
      if( i < name.length ) {
          try{
              fs.accessSync(wowFolder+'\\Data\\'+name[i], fs.constants.R_OK && fs.constants.W_OK);
              md5File(wowFolder+'\\Data\\'+name[i], function(err, hash2){
                  md5hash = hash2.toUpperCase();
                  if(md5hash !== hash[i])
                  {
                    toUpdate_name.push(name[i]);
                    toUpdate.push(linkDownload[i]);
                  }
                  this.repeater(i+1, name, linkDownload, hash, toUpdate, toUpdate_name);
              });
          }catch(e){
              toUpdate_name.push(name[i]);
              toUpdate.push(linkDownload[i]);
              this.repeater(i+1, name, linkDownload, hash, toUpdate, toUpdate_name);
          }
      }
      else{
          this.startDownload(toUpdate, toUpdate_name);
      }
    };

    patchDownloader.prototype.startDownload = function(toUpdate, toUpdate_name)
    {
        var j = 0;
        if(toUpdate.length > 0)
        {
            //TRASFERIRE
            $(document).ready(function() {
                $('.download').removeClass('hidden');
                $('#play-btn').removeClass('hidden');
                $('.download').delay(1500).fadeIn(1000);
            });
            
            this.downloadPatch(toUpdate, toUpdate_name, j, function next(){});
        }
        else
        {
            //TRASFERIRE
            $(document).ready(function() {
                $('#play-btn').removeClass('hidden');
                $('#play-btn').fadeIn(1000);
            });
        }
    };

    patchDownloader.prototype.downloadPatch = function(links, names, i, callback)
    {
        var len = 0; 
        var file = fs.createWriteStream(wowFolder+'\\Data\\'+names[i]);	
        var name = names[i];
        var request = http.get(links[i], function(response) {
         response.pipe(file);
           response.on('data', function(chunk) {
                len += chunk.length;
                
                var percent = (len / response.headers['content-length']) * 100;
                var realPercent = Math.trunc(percent);
                $("#dataDownload").html("Data downloaded: "+Math.trunc(len/1000000)+ " MB / "+Math.trunc(response.headers['content-length']/1000000) +" MB");
                $("#patchDownload").html("File: "+name);
                $(".progress-bar").html(realPercent+' %');
                $(".progress-bar").attr("aria-valuenow", realPercent);
                $(".progress-bar").attr("style", "width:"+realPercent+"%");
              });
            file.on('finish', function() {
              file.close();  // close() is async, call cb after close completes
              if(i < names.length-1)
              {
                this.downloadPatch(links, names, i+1, callback);
              }
              else
              {
                  //TRASFERIRE
                  $(document).ready(function() {
                        $('.download').delay(1500).fadeOut(1000);
                        $('#play-btn').delay(1500).fadeIn(1000);
                  });
              }
            });
          }).on('error', function(err) { // Handle errors
            fs.unlink(wowFolder+'\\Data\\'+names[i]); // Delete the file async. (But we don't check the result)
            if (callback) callback(err.message);
          });
          
    };
    
    // export api
    module.exports = patchDownloader;
})();