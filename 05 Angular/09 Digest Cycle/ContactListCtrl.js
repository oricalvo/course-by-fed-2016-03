angular.module("MyApp").controller("ContactListCtrl", function($scope) {
    $scope.$watch("name", function(newValue, oldValue) {
        console.log("CHANGED: " + oldValue + " --> " + newValue);
        
        $scope.$parent.parentName = $scope.name;
    });
});

