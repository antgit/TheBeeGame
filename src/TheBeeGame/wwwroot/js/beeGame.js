define("beeGame", ["jquery"], function ($) {
    function init() {
        $("#hit").click(function() {
            hitRandomBee().done(function (e) {
                getAllBees().done(function(data) {
                    console.log(data.length);
                });
            }).fail(function(e) {

            });
        });
    }

    function hitRandomBee() {
        return $.ajax({
            url: "/Home/HitRandomBee"
        });
    }

    function getAllBees() {
        return $.ajax({
            url: "/Home/GetAllBees"
        });
    }

    return {
        init: init
    };
});