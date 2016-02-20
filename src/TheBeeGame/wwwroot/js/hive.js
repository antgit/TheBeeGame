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

    return {
        init: init,
        hitRandomBee: hitRandomBee
    };
});