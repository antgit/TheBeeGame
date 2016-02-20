define("hive", ["bees/queen", "bees/worker", "bees/drone"], function (queen, worker, drone) {
    function init() {
        var bee1 = queen.create();
        var bee2 = worker.create();
        var bee3 = drone.create();
    }

    return {
        init: init
    };
});