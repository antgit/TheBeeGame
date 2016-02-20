define("bees/queen", [], function () {
    var prototype = new function () {
        this.maxHealth = 100;
        this.healthLost = 8;
        this.maxCount = 1;
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