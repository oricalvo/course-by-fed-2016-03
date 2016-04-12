angular.module("MyApp").factory("contactService", function ($q, $http) {
    console.log("contactService factory");

    var contacts = null;
    
    return {
        getAll: function() {
            if(contacts) {
                return $q.when(contacts);
            }

            return $http.get("contacts.json").then(function(res) {
                return contacts = res.data;
            });

            //return $q.when(contacts);
        }
    };
});

// (function() {
//
//     function ContactService() {
//         this.contacts = null;
//     }
//
//     ContactService.prototype.getAll = function () {
//         return [];
//     }
//
//     angular.module("MyApp").service("contactService", ContactService);
// })();

angular.module("MyApp").value("$", angular.element);