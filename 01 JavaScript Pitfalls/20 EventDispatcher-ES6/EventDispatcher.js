var map = {};
function emit(name, args) {
    console.log("{diidhgduygd");
    var handlers = map[name];
    if (!handlers) {
        return;
    }
    handlers.forEach(function (handler) {
        handler(args);
    });
}
function subscribe(name, handler) {
    var handlers = map[name];
    if (!handlers) {
        handlers = map[name] = [];
    }
    handlers.push(handler);
}
exports.EventDispatcher = {
    emit: emit,
    subscribe: subscribe
};
//# sourceMappingURL=EventDispatcher.js.map