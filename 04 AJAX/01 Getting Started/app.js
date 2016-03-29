$("button").click(function () {
    $.ajax({
        type: "GET",
        url: "/contacts.json",
        success: function (data) {
            console.log(data);
        },
        error: function (err) {
            console.log("ERROR");
        },
        cache: false,
    });
});
