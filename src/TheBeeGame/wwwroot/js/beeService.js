define("beeService", ["jquery"], function ($) {
    function hitRandomBee() {
        return $.ajax({
            url: "/Home/HitRandomBee",
            type: "POST"
        });
    }

    function getAllBees() {
        return $.ajax({
            url: "/Home/GetAllBees",
            type: "GET"
        });
    }

    function repopulate() {
        return $.ajax({
            url: "/Home/Repopulate",
            type: "POST"
        });
    }

    return {
        hitRandomBee: hitRandomBee,
        getAllBees: getAllBees,
        repopulate: repopulate
    };
});