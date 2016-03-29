$("button").click(function () {

    Q.all([
        BL.getAllContacts(),
        DAL.getUserDetails(),
    ]).then(function(res) {
        var contacts = res[0];
        var userDetials = res[1];
        console.log(res);
    }).catch(function() {
    });

    // BL.getAllContacts().then(function (contacts) {
    //     throw new Error("XXX");
    //
    //     console.log(contacts);
    // }).catch(function (err) {
    //     console.log("ERROR: " + err.message);
    // });
    //
    // BL.getAllContacts().then(function (contacts) {
    //     throw new Error("XXX");
    //
    //     console.log(contacts);
    // }).catch(function (err) {
    //     console.log("ERROR: " + err.message);
    // });
});

var getAllContactsPromise = null;
var contacts = null;

var DAL = {
    getAllContacts: function () {
        if (contacts) {
            return Q.when(contacts);
        }

        return Q($.ajax({
            type: "GET",
            url: "/contacts.json",
            cache: false,
        })).then(function (contactsIn) {
            return contacts = contactsIn;
        });

        // if(!getAllContactsPromise) {
        //     getAllContactsPromise = Q($.ajax({
        //         type: "GET",
        //         url: "/contacts.json",
        //         cache: false,
        //     }));
        // }

        //return getAllContactsPromise;
    },

    getUserDetails: function () {
        return Q.when({
            id: 123,
            name: "Ori",
        });
    }
};

function fixContacts(contacts) {
    //throw new Error("Ooops");
}

var BL = {
    getAllContacts: function () {
        return DAL.getAllContacts().then(function (contacts) {
            fixContacts(contacts);

            return contacts;
        });
    }
};
