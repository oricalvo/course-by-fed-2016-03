/// <reference path="../../typings/tsd.d.ts" />

// import * as template from "./app.component.html";
import {appModule} from "../module";
import "./clock.component";
import {ClockComponent} from "./clock.component";

class AppComponent {
    message: string;
    format: string;
    clock1: ClockComponent;
    
    constructor() {
        this.message = "Hello Modern Angular";
        this.format = 'HH:mm:ss';
    }
    
    change() {
        this.format = "ss";
    }

    blablaTick(t) {
        console.log("Tick: " + t);
    }
    
    stop() {
        this.clock1.stop();
    }
}

appModule.directive("app", function() {
    return {
        controller: AppComponent,
        template: require("./app.component.html!text"),
        styles: require("./app.component.css!css"),
        controllerAs: "ctrl",
        scope: {},
    };
});
