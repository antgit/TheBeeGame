define("bee", ["knockout"], function (ko) {
    function create(options) {
        return new function bee() {
            this.health = ko.observable(options.health);
            this.type = options.type;
            this.uniqueId = options.uniqueId;

            this.left = Math.floor(Math.random() * 100);
            this.top = Math.floor(Math.random() * 100);
        }
    }

    return {
        create: create
    }
});