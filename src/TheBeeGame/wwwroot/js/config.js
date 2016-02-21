requirejs.config({
    baseUrl: "/js",
    paths: {
        jquery: "../lib/jquery/dist/jquery.min",
        knockout: "../lib/knockout/dist/knockout",
        beeGame: "beeGame",
        beeService: "beeService",
        hive: "hive",
        bee: "bee"
    },
    shim: {
        jquery: {
            exports: "$"
        },
        knockout: {
            exports: "ko"
        }
    }
});