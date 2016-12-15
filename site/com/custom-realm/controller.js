(function () {
    var electron = null, Settings = null, settings = null;

    if (Drassil.PLATFORM !== "electron") {
        alert("This page is for desktop app only, for now");
        window.stop();
    } else {
        electron = window.nodeRequire('electron');
        Settings = electron.remote.require('./drassil-app/settings.js');
        settings = new Settings(electron.remote.getCurrentWindow());
    }

    $(document).ready(function () {
        var next = 1;

        var realms = [];

        window.Drassil.removeCustomRealm = function (realm) {
            var index = realms.indexOf(realm);
            realms.splice(index, 1);
                            
            settings.list().setSync("custom.realms", realms);
        };


        settings.list().get('custom.realms').then(function (realms) {
            if (!realms)
                return;

            $.each(realms, function (k, r) {
                addRealm(r);
            });
        });

        function addRealm(realmlist) {
            $("#realm-elements").append("<realm-element id='elem-" + next + "' data-realm=" + realmlist + "></realm-element>");

            realms.push(realmlist);

            next++;
        }


        $(".add-more").click(function (e) {
            e.preventDefault();

            var realmlist = $("#realm-box").val();

            addRealm(realmlist);

            settings.list().setSync("custom.realms", realms);

            $("#realm-box").val("");
        });
    });
})();

//# sourceURL=custom-realm/controller.js