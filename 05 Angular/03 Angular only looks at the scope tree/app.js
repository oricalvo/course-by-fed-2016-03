angular.module("MyApp", []).run(function($rootScope) {
    console.log("run");

    setTimeout(function() {
        $("body").append("<span>{{blabla}}</span>");
    }, 1000);

    //$rootScope.name = "XXX";
});


