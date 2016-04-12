(function() {
    
    function ContactListCtrl($scope, contactService, $location) {
        contactService.getAll().then(function (contacts) {
            $scope.contacts = contacts;
        });

        $scope.change = function () {
            $location.path("blabla");
            $location.search({id: 123, name: "Ori"});
            $location.url("xxx");
        }
    }
    
    angular.module("MyApp").controller("ContactListCtrl", ContactListCtrl);
})();
