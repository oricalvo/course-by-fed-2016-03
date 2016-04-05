 (function() {
    function CalcCtrl() {
        this.value = 0;
        this.expr = "";

        this.init();
    }

    CalcCtrl.prototype.init = function () {
        this.value = 0;
        this.expr = "";
        this.buttons = [
            {text: 0, op: "num"},
            {text: 1, op: "num"},
            {text: 2, op: "num"},
            {text: 3, op: "num"},
            {text: 4, op: "num"},
            {text: 5, op: "num"},
            {text: 6, op: "num"},
            {text: 7, op: "num"},
            {text: 8, op: "num"},
            {text: 9, op: "num"},
            {text: "+", op: "plus"},
            {text: "-", op: "minus"},
            {text: "=", op: "calc"},
        ];
    }

    CalcCtrl.prototype.buttonClicked = function (btn) {
        if (btn.op == "num") {
            this.expr += btn.text;
        }
        else if (btn.op == "plus") {
            this.value += parseInt(this.expr);
            this.expr = "";
        }
        else if (btn.op == "minus") {
            this.value -= parseInt(this.expr);
            this.expr = "";
        }
        else if (btn.op == "calc") {
            this.expr = this.value.toString();
        }
    }

    angular.module("MyApp").controller("CalcCtrl", CalcCtrl);
})();
