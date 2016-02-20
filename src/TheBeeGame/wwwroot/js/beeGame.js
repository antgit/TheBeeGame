define("beeGame", ["jquery", "hive"], function ($, hive) {
    function init() {
        hive.init();

        $("#hit").click(function() {
            hive.hitRandomBee();
            hive.clenup();
        });
    }

    return {
        init: init
    };
});