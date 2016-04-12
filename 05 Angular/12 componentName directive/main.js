/// <reference path="./typings/tsd.d.ts" />
"use strict";
require("./lib/angular.js");
require("./app/directives/componentName");
require("./app/components/app.component");
var module_1 = require("./app/module");
angular.bootstrap(document.getElementById("html"), [module_1.appModule.name]);
//# sourceMappingURL=main.js.map