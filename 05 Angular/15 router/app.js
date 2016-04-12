angular.module("MyApp", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "home.html",
                controller: "HomeCtrl",
            })
            .state('about', {
                url: "/about?name",
                templateUrl: "about.html",
                controller: "AboutCtrl",
            });
    })
    .run(function(contactService) {
});

