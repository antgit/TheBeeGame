define("bees/drone", [], function () {
    var prototype = new function () {
        this.maxHealth = 50;
        this.healthLost = 12;
        this.maxCount = 8;
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