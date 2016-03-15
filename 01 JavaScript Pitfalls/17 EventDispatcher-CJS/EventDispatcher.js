var map = {};

function emit(name, args) {
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

module.exports = {
    emit: emit,
    subscribe: subscribe,
};
