$("button").click(function () {
    BL.getAllContacts().then(function(contacts) {
        throw new Error("XXX");

        console.log(contacts);
    }).catch(function(err) {
        console.log("ERROR: " + err.message);
    });
});

var DAL = {
    getAllContacts: function () {
        return Q($.ajax({
            type: "GET",
            url: "/contacts.json",
            cache: false,
        }));
    }
};

function fixContacts(contacts) {
    //throw new Error("Ooops");
}

var BL = {
    getAllContacts: function () {
        return DAL.getAllContacts().then(function(contacts) {
            fixContacts(contacts);

            return contacts;
        });
    }
};
