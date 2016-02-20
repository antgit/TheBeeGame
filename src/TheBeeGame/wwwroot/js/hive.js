define("hive", ["beeTypes"], function (beeTypes) {
    var bees = [];

    function init() {
        beeTypes.get().forEach(function(beeType) {
            for (var i = 0; i < beeType.maxCount; i++) {
                bees.push(beeType.create());
            }
        });
    }

    return {
        init: init
    };
});