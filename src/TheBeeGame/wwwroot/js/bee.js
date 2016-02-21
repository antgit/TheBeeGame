define("bee", ["knockout"], function (ko) {
    function create(options) {
        return new function bee() {
            this.health = ko.observable(options.health);
            this.type = options.type;
            this.uniqueId = options.uniqueId;
            this.image = getImage(options.type);

            this.left = Math.floor(Math.random() * (800 - 200));
            this.top = Math.floor(Math.random() * (800-  93));
        }
    }

    function getImage(beeType) {
        switch (beeType) {
            case 1:
                return "queen.gif";
            case 2:
                return "worker.gif";
            case 3:
                return "drone.gif";
        }
    }

    return {
        create: create
    }
});