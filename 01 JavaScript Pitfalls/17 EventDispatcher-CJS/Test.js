var EventDispatcher = require("./EventDispatcher");

EventDispatcher.subscribe("login", function (args) {
    console.log("User logged in: " + args.userName);
});

EventDispatcher.subscribe("logout", function (args) {
    console.log("User logged out: " + args.when);
});

EventDispatcher.emit("login", {userName: "ori"});
EventDispatcher.emit("logout", {when: new Date()});
