angular.module("MyApp", ["ngMaterial"]).run(function($rootScope) {
    console.log("run");

    setTimeout(function() {
        $("body").append("<span>{{blabla}}</span>");
    }, 1000);

    var originalApply = $rootScope.constructor.prototype.$digest;
    $rootScope.constructor.prototype.$digest = function() {
        iterations = 0;

        console.log("CYCLE BEGIN: %O %O",this, $rootScope.$$watchersCount);

        originalApply.apply(this, arguments);

        console.log("CYCLE END: " + $rootScope.$$watchersCount);
    }

    var iterations = 1;
    $rootScope.$watch(function() {
        console.log("ITR: " + iterations++);
    });

    //$rootScope.name = "XXX";
});


