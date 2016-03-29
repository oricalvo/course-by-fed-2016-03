var Menu = (function() {
    "use strict";

    function Menu(element) {
        this.element = element;
        this.counter = 1;
        this.links = this.getLinksFromServer();

        this.updateDOM();
    }

    Menu.prototype.updateDOM = function() {
        var me = this;

        me.links.forEach(function(link) {
            var a = $("<a />");
            a.text(link.text);
            a.attr("href", link.url);
            a.bind("click", function() {

                var url = a.attr("href");
                history.pushState({}, null, url);

                return false;
            });

            me.element.append(a);
        });

        //this.element.find $("diduhdiuh")

        if(element.attr("checked") !== undefined) {
        }

        var button = $("<button>Click me</button>");
        button.bind("click", function() {
            me.onButtonClicked();
        });
        me.element.append(button);
    }

    Menu.prototype.onButtonClicked = function() {
        alert(this.counter++);
    }

    Menu.prototype.getLinksFromServer = function() {
        return [
            {text: "New Contact", url: "/contact/new"},
            {text: "New Group", url: "/group/new"},
        ];
    }

    return Menu;
})();
