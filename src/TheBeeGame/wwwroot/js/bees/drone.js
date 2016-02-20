define("bees/drone", [], function () {
    var prototype = new function () {
        this.lifespan = 50;
        this.lifelost = 12;
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