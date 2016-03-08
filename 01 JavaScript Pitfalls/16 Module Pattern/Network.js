var myApp = myApp || {};

myApp.Network = (function () {

    var baseUrl = "http://mywebsite.com";
    var lastActivity;
    var hasPendingRequests;

    function httpGet() {
        console.log("httpGet: " + baseUrl);
    }

    function httpPost() {
        console.log("httpPost");
    }

    return {
        httpGet: httpGet,
        httpPost: httpPost,
    };
})();
