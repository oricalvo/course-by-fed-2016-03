"use strict";
var module_1 = require("../module");
module_1.appModule.directive("componentName", function ($parse) {
    return {
        restrict: "A",
        compile: function (element, attrs) {
            console.log("componentName compile");
            return function postLink(scope, element, attrs) {
                console.log("componentName postLink");
                var name = attrs.componentName;
                if (!name) {
                    return;
                }
                var parentScope = scope;
                var componentScope = element.isolateScope();
                var getter = $parse(name);
                var setter = getter.assign;
                if (!setter) {
                    return;
                }
                setter(parentScope, componentScope.ctrl);
                componentScope.$on("$destroy", function () {
                    setter(parentScope, null);
                });
            };
        }
    };
});
//# sourceMappingURL=componentName.js.map