var DOMHelpers = (function() {

    function selectSingle(selector) {
        var res = $(selector);
        if(res.length != 1) {
            throw new Error("Found too few/many elements with selector: " + selector);
        }

        return res;
    }

    return {
        selectSingle: selectSingle,
    };
})();
