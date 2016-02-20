define("bees/queen", ["bees/bee"], function (bee) {
    var prototype = new function () {
        this.maxHealth = 100;
        this.healthLost = 8;
        this.__proto__ = bee;
    }

    function create() {
        return new function queen() {
            this.__proto__ = prototype;
            this.health = this.maxHealth;
        }
    }

    return {
        create: create,
        maxCount: 1
    };
});