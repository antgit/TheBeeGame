define("beeGame", ["jquery", "beeService", "hive"], function ($, beeService, hive) {
    function init() {
        $("#hit").click(function() {
            beeService.hitRandomBee().done(function (e) {
                beeService.getAllBees().done(function (data) {
                    hive.update(data);
                    console.log(data.length);
                });
            }).fail(function(e) {

            });
        });
    }

    return {
        init: init
    };
});