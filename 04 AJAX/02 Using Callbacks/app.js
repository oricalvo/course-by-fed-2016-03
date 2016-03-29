$("button").click(function () {
    BL.getAllContacts(function(contacts) {
        console.log(contacts);
    }, function() {
        console.log("ERROR");
    });
});

var DAL = {
    getAllContacts: function (success, error) {
        $.ajax({
            type: "GET",
            url: "/contacts.json",
            success: function (data) {
                success(data);
            },
            error: function (err) {
                if (error) {
                    error(err);
                }
            },
            cache: false,
        });
    }
};

function fixContacts(contacts) {
    throw new Error("Ooops");
}

var BL = {
    getAllContacts: function (success, error) {
        DAL.getAllContacts(
            function (contacts) {
                if(success) {
                    try {
                        fixContacts(contacts);

                        success(contacts);
                    }
                    catch(err) {
                        if(error) {
                            error(err);
                        }
                    }
                }
            }, function (err) {
                if(error) {
                    error(err);
                }
            });
    }
};
