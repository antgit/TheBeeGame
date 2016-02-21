﻿define("beeGame", ["jquery", "beeService", "hive"], function ($, beeService, hive) {
    function init() {
        beeService.getAllBees().done(function (data) {
            hive.update(data);
            hive.bind();
        });

        $("#hit").click(function() {
            beeService.hitRandomBee().done(function (e) {
                beeService.getAllBees().done(function (data) {
                    hive.update(data);
                });
            }).fail(function(e) {

            });
        });
    }

    return {
        init: init
    };
});