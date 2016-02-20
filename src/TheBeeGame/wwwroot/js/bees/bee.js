define("bee", [], function () {
    var bee = new function () {

        this.hit = function() {
            this.health -= this.healthLost;
        }
    }

    return {
        bee: bee
    };
});