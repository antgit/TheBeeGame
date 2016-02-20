define("bees/queen", [], function () {
    var prototype = new function () {
        this.lifespan = 100;
        this.lifelost = 8;
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