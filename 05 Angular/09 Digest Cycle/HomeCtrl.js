angular.module("MyApp").controller("HomeCtrl", function($scope) {
    var counter = 0;
    
    $scope.parentName = "XXX";
    
    $scope.$watch("parentName", function() {
        $scope.counter = ++counter;
    });
});
