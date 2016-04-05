angular.module("MyApp", []).run(function($rootScope) {
    console.log("run");

    setTimeout(function() {
        $("body").append("<span>{{blabla}}</span>");
    }, 1000);

    var originalApply = $rootScope.constructor.prototype.$apply;
    $rootScope.constructor.prototype.$apply = function() {
        console.log("DIRTY CHECKING: " + $rootScope.$$watchersCount);

        originalApply.apply(this, arguments);
    }

    //$rootScope.name = "XXX";
});


