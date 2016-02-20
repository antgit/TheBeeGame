define("beeGame", ["jquery", "hive"], function ($, hive) {
    function init() {
        hive.init();

        $("#hit").click(function() {
            hive.hitRandomBee();
        });
    }

    return {
        init: init
    };
});