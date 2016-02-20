define("bee", [], function () {
    var bee = new function () {

        this.hit = function() {
            this.health -= this.healthLost;
        }

        this.isAlive = function() {
            return this.health > 0;
        }
    }

    return bee;
});