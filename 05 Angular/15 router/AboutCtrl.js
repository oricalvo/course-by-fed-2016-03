angular.module("MyApp").controller("AboutCtrl", function($scope, $stateParams) {
    console.log("Name = " + $stateParams.name);
});
