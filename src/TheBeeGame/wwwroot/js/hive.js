define("hive", ["beeTypes"], function (beeTypes) {
    var bees = [];

    function init() {
        beeTypes.get().forEach(function(beeType) {
            for (var i = 0; i < beeType.maxCount; i++) {
                bees.push(beeType.create());
            }
        });
    }

    function hitRandomBee() {
        var index = Math.floor(Math.random() * bees.length);
        var randomBee = bees[index];
        randomBee.hit();
    }

    function clenup() {
        bees = bees.filter(function(bee) {
            return bee.isAlive();
        });

        if (isQueenDead()) {
            console.log("Queen is dead!");
            bees = [];
        }

        console.log(bees.length);
    }

    function isQueenDead() {
        return bees.every(function(bee) {
            return !bee.isQueen;
        });
    }

    return {
        init: init,
        hitRandomBee: hitRandomBee,
        clenup: clenup
    };
});