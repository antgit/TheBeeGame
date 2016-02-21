define("hive", ["bee"], function (bee) {
    var bees = [];

    function update(newBees) {
        removeDeadBees(newBees);
        updateExistingBees(newBees);
        addNewBees(newBees);
    }

    function removeDeadBees(newBees) {
        var deadBees = [];

        bees.forEach(function(bee) {
            if (newBees.filter(function(newBee) {       //Can't use find because it's not supported by IE yet
                return newBee.uniqueId === bee.uniqueId;
            }).length === 0) {
                deadBees.push(bee);
            }
        });

        deadBees.forEach(function(deadBee) {
            var index = bees.indexOf(deadBee);
            bees.splice(index, 1);
        });
    }

    function updateExistingBees(newBees) {
        newBees.forEach(function(newBee) {
            var oldBees = bees.filter(function (oldBees) { 
                return newBee.uniqueId === oldBees.uniqueId;
            });

            if (oldBees.length === 0) {
                return;
            }

            oldBees[0].health = newBee.health;
        });
    }

    function addNewBees(newBees) {
        newBees.forEach(function (newBee) {
            var oldBees = bees.filter(function (oldBees) {
                return newBee.uniqueId === oldBees.uniqueId;
            });

            if (oldBees.length > 0) {
                return;
            }

            bees.push(bee.create({
                health: newBee.health,
                type: newBee.type,
                uniqueId: newBee.uniqueId
            }));
        });
    }

    return {
        update: update
    }
});