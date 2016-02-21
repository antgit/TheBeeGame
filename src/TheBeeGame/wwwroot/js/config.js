requirejs.config({
    baseUrl: "/js",
    paths: {
        jquery: "../lib/jquery/dist/jquery.min",
        beeGame: "beeGame",
        beeService: "beeService",
        hive: "hive",
        bee: "bee"
    },
    shim: {
        jquery: {
            exports: '$'
        }
    }
});