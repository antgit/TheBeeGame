define("bees/drone", ["bee"], function (bee) {
    var prototype = new function () {
        this.maxHealth = 50;
        this.healthLost = 12;
        this.__proto__ = bee;
    }

    function create() {
        return new function drone() {
            this.__proto__ = prototype;
            this.health = this.maxHealth;
        }
    }

    return {
        create: create,
        maxCount: 8
    };
});