define("beeGame", ["jquery", "beeService", "hive"], function ($, beeService, hive) {
    //Todo use knockout
    function init() {
        beeService.getAllBees().done(function (data) {
            hive.update(data);
            hive.bind();
        });

        $("#hit").click(function() {
            beeService.hitRandomBee().done(function (e) {
                beeService.getAllBees().done(function (data) {
                    hive.update(data);
                    if (data.length === 0) {
                        $("#hit").hide();
                        $("#new").show();
                    }
                });
            }).fail(function(e) {

            });
        });

        $("#new").click(function () {
            beeService.repopulate().done(function (e) {
                beeService.getAllBees().done(function (data) {
                    hive.update(data);
                    $("#hit").show();
                    $("#new").hide();
                });
            }).fail(function (e) {

            });
        });
    }

    return {
        init: init
    };
});