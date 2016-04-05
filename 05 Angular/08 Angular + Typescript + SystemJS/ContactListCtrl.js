/// <reference path="./typings/angularjs/angular.d.ts" />
"use strict";
var app_1 = require("./app");
var ContactListCtrl = (function () {
    function ContactListCtrl($blabla) {
        this.showNames = true;
        this.name = "";
        this.contacts = [
            { id: 1, name: "Roni8" },
            { id: 2, name: "Ori" },
        ];
    }
    ContactListCtrl.prototype.toggleNames = function () {
        this.showNames = !this.showNames;
    };
    ContactListCtrl.prototype.sortByName = function () {
        this.contacts.sort(function (c1, c2) {
            if (c1.name > c2.name) {
                return 1;
            }
            if (c1.name == c2.name) {
                return 0;
            }
            return -1;
        });
    };
    ContactListCtrl.prototype.add = function () {
        if (!this.name) {
            alert("Please specify a name");
            ;
            return;
        }
        var contact = {
            id: -1,
            name: this.name
        };
        this.contacts.push(contact);
        this.name = "";
    };
    ContactListCtrl.prototype.remove = function (contact, index) {
        if (confirm("Are you sure you want to delete " + contact.name + " ?")) {
            this.contacts.splice(index, 1);
        }
    };
    ContactListCtrl.$inject = ["$timeout"];
    return ContactListCtrl;
}());
app_1.app.controller("ContactListCtrl", ContactListCtrl);
//# sourceMappingURL=ContactListCtrl.js.map