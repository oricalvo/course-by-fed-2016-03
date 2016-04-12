/// <reference path="./typings/tsd.d.ts" />

import "./lib/angular.js";
import "./app/directives/componentName";
import "./app/components/app.component";
import {appModule} from "./app/module";

angular.bootstrap(document.getElementById("html"), [appModule.name]);
