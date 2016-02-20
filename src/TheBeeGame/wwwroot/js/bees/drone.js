define("bees/drone", [], function () {
    var prototype = new function () {
        this.maxHealth = 50;
        this.healthLost = 12;
    }

    function create() {
        return new function drone() {
            this.__proto__ = prototype;
        }
    }

    return {
        create: create,
        maxCount: 8
    };
});