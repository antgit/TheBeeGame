define("bee", [], function() {
    function create(options) {
        return new function bee() {
            this.health = options.health;
            this.type = options.type;
            this.uniqueId = options.uniqueId;
        }
    }

    return {
        create: create
    }
});