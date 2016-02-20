define("bees/worker", [], function () {
    var prototype = new function() {
        this.maxHealth = 75;
        this.healthLost = 10;
        this.maxCount = 5;
    }

    function create() {
        return new function () {
            this.__proto__ = prototype;
        }
    }

    return {
        create: create
    };
});