angular.module("MyApp", [])
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .run(function(contactService) {
});

