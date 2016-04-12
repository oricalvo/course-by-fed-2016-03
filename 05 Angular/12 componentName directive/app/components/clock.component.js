/// <reference path="../../typings/tsd.d.ts" />
"use strict";
// import * as template from "./app.component.html";
var module_1 = require("../module");
var ClockComponent = (function () {
    function ClockComponent($interval) {
        this.$interval = $interval;
        this.time = new Date();
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