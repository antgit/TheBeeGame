requirejs.config({
    baseUrl: "/js",
    paths: {
        jquery: "../lib/jquery/dist/jquery.min",
        beeGame: "beeGame",
        beeService: "beeService"
    },
    shim: {
        jquery: {
            exports: '$'
        }
    }
});