/// <reference path="../../typings/tsd.d.ts" />

// import * as template from "./app.component.html";
import {appModule} from "../module";

export class ClockComponent {
    time: Date;
    format: string;
    onTick: Function;

    private intervalId: any;

    constructor(private $interval) {
        this.time = new Date();
    }

    start() {
        if(this.intervalId) {
            return;
        }

        this.intervalId = this.$interval(()=> {
            this.time = new Date();
            this.onTick({time: this.time});
        }, 1000);
    }

    stop() {
        if(this.intervalId) {
            this.$interval.cancel(this.intervalId);
            this.intervalId = null;
        }
    }
}

appModule.directive("clock", function() {
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

