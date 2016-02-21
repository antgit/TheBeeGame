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

    return {
        hitRandomBee: hitRandomBee,
        getAllBees: getAllBees
    };
});