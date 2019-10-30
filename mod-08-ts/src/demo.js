"use strict";
var Calculator = /** @class */ (function () {
    // private message: string;
    // constructor(message: string) {
    //   this.message = message;
    // }
    function Calculator(message) {
        this.message = message;
    }
    Calculator.prototype.add = function (x, y) {
        // this.message = ''
        return x + y;
    };
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
    };
    return Calculator;
}());
var x = document.getElementById("x");
var y = document.getElementById("y");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var result = document.getElementById("result");
var calculator = new Calculator("");
if (add && result) {
    add.addEventListener("click", function () {
        result.textContent = calculator.add(+x.value, +y.value).toString();
    });
}
subtract &&
    subtract.addEventListener("click", function () {
        result &&
            (result.textContent = calculator.subtract(+x.value, +y.value).toString());
    });
var person = {
    firstName: "Maurice"
};
// person.lastName = "de Beijer";
var Cat = /** @class */ (function () {
    function Cat(catName) {
        this.catName = catName;
    }
    Cat.prototype.sleep = function () { };
    return Cat;
}());
var zorro = new Cat("Zorro");
function eat(cat) {
    console.log(cat.catName + " is eating");
    cat.sleep();
    if (cat instanceof Cat) {
    }
}
eat(zorro);
eat({
    catName: "Garfield",
    sleep: function () { }
});
