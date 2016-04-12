export var appModule = angular.module("MyApp", []);

appModule.run(function($parse) {
    var expr = "g()";

    var obj = {
        a: 5,
        b: 6,
        g: function() {
            console.log("g");

            return 8;
        }
    };

    var fn = $parse(expr);

    //var res = fn({a: 1, b: 2});
    //console.log(res);

    var res = fn(obj);
    console.log(res);
});


