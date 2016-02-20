define("bees/worker", ["bees/bee"], function (bee) {
    var prototype = new function () {
        this.maxHealth = 75;
        this.healthLost = 10;
        this.__proto__ = bee;
    }

    function create() {
        return new function worker() {
            this.__proto__ = prototype;
            this.health = this.maxHealth;
        }
    }

    return {
        create: create,
        maxCount: 5
    };
});