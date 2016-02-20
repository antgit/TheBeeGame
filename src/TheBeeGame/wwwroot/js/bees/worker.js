define("bees/worker", [], function () {
    var prototype = new function () {
        this.maxHealth = 75;
        this.healthLost = 10;
    }

    function create() {
        return new function worker() {
            this.__proto__ = prototype;
        }
    }

    return {
        create: create,
        maxCount: 5
    };
});