/// <reference path="../typings/tsd.d.ts" />
"use strict";
// import * as template from "./app.component.html";
var module_1 = require("./module");
var ClockComponent = (function () {
    function ClockComponent($interval, $attrs, $parse, $scope) {
        this.$interval = $interval;
        this.time = new Date();
        if ($attrs.name) {
            var getter = $parse($attrs.name);
            var setter = getter.assign;
            setter($scope.$parent, this);
        }
        // $interval(function() {
        // this references the window object !!!
        //     this.
        // }, 1000);
        this.start();
    }
    ClockComponent.prototype.start = function () {
        var _this = this;
        if (this.intervalId) {
            return;
        }
        this.intervalId = this.$interval(function () {
            _this.time = new Date();
            _this.onTick({ time: _this.time });
        }, 1000);
    };
    ClockComponent.prototype.stop = function () {
        if (this.intervalId) {
            this.$interval.cancel(this.intervalId);
            this.intervalId = null;
        }
    };
    return ClockComponent;
}());
exports.ClockComponent = ClockComponent;
module_1.appModule.directive("clock", function () {
    return {
        controller: ClockComponent,
        template: require("./clock.component.html!text"),
        styles: require("./clock.component.css!css"),
        controllerAs: "ctrl",
        bindToController: true,
        scope: {
            format: "<",
            onTick: "&",
        },
    };
});
//# sourceMappingURL=clock.component.js.map