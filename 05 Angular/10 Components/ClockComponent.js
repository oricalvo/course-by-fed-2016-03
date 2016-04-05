var app = require("./app");

function ClockComponent($interval) {
    var me = this;

    me.format = 'HH:mm:ss';
    
    $interval(function() {
        me.time = new Date();
        
        me.onTick();
    }, 1000);
}

ClockComponent.prototype.doSomething = function() {
    alert("Hello");
}

app.directive("clock", function() {
    return {
        restrict: "E",
        controller: ClockComponent,
        controllerAs: "ctrl",
        scope: {
            onTick: "&",
            format: "<",
        },
        bindToController: true,
        template: require("./ClockComponent.html!text"),
        styles: require("./ClockComponent.css!")
    };
});
