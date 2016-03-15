var EventDispatcher_1 = require("./EventDispatcher");
EventDispatcher_1.EventDispatcher.subscribe("login", function (args) {
    console.log("User logged in: " + args.userName);
});
EventDispatcher_1.EventDispatcher.subscribe("logout", function (args) {
    console.log("User logged out: " + args.when);
});
EventDispatcher_1.EventDispatcher.emit("login", { userName: "ori" });
EventDispatcher_1.EventDispatcher.emit("logout", { when: new Date() });
//# sourceMappingURL=Test.js.map