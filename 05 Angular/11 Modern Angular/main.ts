/// <reference path="./typings/tsd.d.ts" />

import "./lib/angular.js";
import "./app/app.component";
import {appModule} from "./app/module";

angular.bootstrap(document.getElementById("html"), [appModule.name]);
