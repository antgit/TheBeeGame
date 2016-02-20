requirejs.config({
    baseUrl: "/js",
    paths: {
        jquery: "../lib/jquery/dist/jquery.min",
        bee: "bees/bee",
        queen: "bees/queen",
        worker: "bees/worker",
        drone: "bees/drone",
        beeTypes: "bees/beeTypes",
        hive: "hive",
        beeGame: "beeGame"
    },
    shim: {
        jquery: {
            exports: '$'
        }
    }
});