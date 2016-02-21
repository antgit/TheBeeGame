define("beeGame", ["jquery", "beeService"], function ($, beeService) {
    function init() {
        $("#hit").click(function() {
            beeService.hitRandomBee().done(function (e) {
                beeService.getAllBees().done(function (data) {
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