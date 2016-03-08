(function () {

    EventDispatcher.subscribe("login", function (args) {
        console.log("User logged in: " + args.userName);
    });

    EventDispatcher.subscribe("logout", function (args) {
        console.log("User logged out: " + args.when);
    });

    EventDispatcer.emit("login", { userName: "ori" });
    EventDispatcer.emit("logout", { when: new Date() });
})();
