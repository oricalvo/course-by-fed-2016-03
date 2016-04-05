/// <reference path="./typings/angularjs/angular.d.ts" />

import {app} from "./app";

class ContactListCtrl {
    showNames:boolean;
    name:string;
    contacts:Contact[];

    static $inject = ["$timeout"];

    constructor($blabla) {
        this.showNames = true;
        this.name = "";
        this.contacts = [
            {id: 1, name: "Roni8"},
            {id: 2, name: "Ori"},
        ];
    }

    toggleNames() {
        this.showNames = !this.showNames;
    }

    sortByName() {
        this.contacts.sort(function (c1, c2) {
            if (c1.name > c2.name) {
                return 1;
            }

            if (c1.name == c2.name) {
                return 0;
            }

            return -1;
        });
    }

    add() {
        if (!this.name) {
            alert("Please specify a name");
            ;
            return;
        }

        var contact = {
            id: -1,
            name: this.name,
        };

        this.contacts.push(contact);

        this.name = "";
    }

    remove(contact, index) {
        if (confirm("Are you sure you want to delete " + contact.name + " ?")) {
            this.contacts.splice(index, 1)
        }
    }
}

interface Contact {
    id: number;
    name: string;
}

app.controller("ContactListCtrl", ContactListCtrl);
