(function() {
    
    function ContactListCtrl($scope, contactService, $) {
        //var contactService = $injector.get("contactService");
        contactService.getAll().then(function(contacts) {
            $scope.contacts = contacts;
        });
    }
    
    angular.module("MyApp").controller("ContactListCtrl", ContactListCtrl);
})();
