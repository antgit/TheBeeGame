define("hive", ["bee", "knockout"], function(bee, ko) {
    var viewModel = {
        bees : ko.observableArray()
    };

    function bind() {
        ko.applyBindings(viewModel);
    }

    function update(newBees) {
        removeDeadBees(newBees);
        updateExistingBees(newBees);
        addNewBees(newBees);
    }

    function removeDeadBees(newBees) {
        var deadBees = [];

        viewModel.bees().forEach(function(bee) {
            if (newBees.filter(function(newBee) {       //Can't use find because it's not supported by IE yet
                return newBee.uniqueId === bee.uniqueId;
            }).length === 0) {
                deadBees.push(bee);
            }
        });

        deadBees.forEach(function(deadBee) {
            var index = viewModel.bees.indexOf(deadBee);
            viewModel.bees.splice(index, 1);
        });
    }

    function updateExistingBees(newBees) {
        newBees.forEach(function(newBee) {
            var oldBees = viewModel.bees().filter(function (oldBees) { 
                return newBee.uniqueId === oldBees.uniqueId;
            });

            if (oldBees.length === 0) {
                return;
            }

            oldBees[0].health(newBee.health);
        });
    }

    function addNewBees(newBees) {
        newBees.forEach(function (newBee) {
            var oldBees = viewModel.bees().filter(function (oldBees) {
                return newBee.uniqueId === oldBees.uniqueId;
            });

            if (oldBees.length > 0) {
                return;
            }

            viewModel.bees.push(bee.create({
                health: newBee.health,
                type: newBee.type,
                uniqueId: newBee.uniqueId
            }));
        });
    }

    return {
        bind: bind,
        update: update
    }
});