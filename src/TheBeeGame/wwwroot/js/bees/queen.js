define("bees/queen", [], function () {
    var prototype = new function () {
        this.maxHealth = 100;
        this.healthLost = 8;
    }

    function create() {
        return new function queen() {
            this.__proto__ = prototype;
        }
    }

    return {
        create: create,
        maxCount: 1
    };
});