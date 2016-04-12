/// <reference path="../../typings/tsd.d.ts" />
"use strict";
// import * as template from "./app.component.html";
var module_1 = require("../module");
require("./clock.component");
var AppComponent = (function () {
    function AppComponent() {
        this.message = "Hello Modern Angular";
        this.format = 'HH:mm:ss';
    }
    AppComponent.prototype.change = function () {
        this.format = "ss";
    };
    AppComponent.prototype.blablaTick = function (t) {
        console.log("Tick: " + t);
    };
    AppComponent.prototype.stop = function () {
        this.clock1.stop();
    };
    return AppComponent;
}());
module_1.appModule.directive("app", function () {
    return {
        controller: AppComponent,
        template: require("./app.component.html!text"),
        styles: require("./app.component.css!css"),
        controllerAs: "ctrl",
        scope: {},
    };
});
//# sourceMappingURL=app.component.js.map