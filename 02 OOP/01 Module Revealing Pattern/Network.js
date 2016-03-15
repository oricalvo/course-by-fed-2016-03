var MyApp = MyApp || {};

MyApp.Network = (function() {

    var lastActivityDate = new Date();

    function httpGet() {
    }

    function httpPost() {
    }

    function getLastActivityDate() {
        return lastActivityDate;
    }

    return {
        httpGet: httpGet,
        httpPost: httpPost,
        getLastActivityDate:getLastActivityDate,
    };

})();
