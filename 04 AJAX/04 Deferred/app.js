$("button").click(function () {

    getUserDetails().then(function(userDetails) {
        console.log(userDetails);
    });

    // console.log("BEFORE");
    //
    // delay(5000).then(function() {
    //     console.log("COMPLETE");
    // });
    //
    // console.log("AFTER");
});

// function delay(timeSpan) {
//     var deferred = Q.defer();
//
//     setTimeout(function() {
//         console.log("setTimeout triggered");
//
//         deferred.resolve();
//     }, timeSpan);
//
//     return deferred.promise;
// }

function delay(promise, timeSpan) {
    var deferred = Q.defer();

    promise.then(function(val) {
        setTimeout(function() {
            deferred.resolve(val);
        }, timeSpan);
    });

    return deferred.promise;
}

function getUserDetails() {
    return delay(Q.when({
        id: 123,
        name: "Ori",
    }), 2500);
}
