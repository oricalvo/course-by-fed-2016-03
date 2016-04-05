angular.module("MyApp", []).run(function($rootScope) {
    $rootScope.$watch(function() {
        console.log("ITERATION");
    });
});

