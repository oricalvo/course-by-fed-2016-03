(function () {

    EventDispatcher.subscribe("login", function () {
        console.log("User logged in");
    });

    EventDispatcher.subscribe("logout", function () {
        console.log("User logged out");
    });

    EventDispatcer.emit("login");
    EventDispatcer.emit("logout");
})();
