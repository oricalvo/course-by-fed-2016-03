var app = require("./app");

function AppComponent() {
}

AppComponent.prototype.onTick = function() {
    console.log("Tick");
}

app.directive("app", function() {
    return {
        restrict: "E",
        controller: AppComponent,
        controllerAs: "ctrl",
        scope: {},
        bindToController: true,
        //template: "<h1>Helllo</h1>",
        templateUrl: "AppComponent.html",
        styles: require("./AppComponent.css!")
    };
});
