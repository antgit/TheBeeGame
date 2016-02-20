define("beeTypes", ["bees/queen", "bees/worker", "bees/drone"], function (queen, worker, drone) {
    function get() {
        return [queen, worker, drone];
    }

    return {
        get: get
    };
});