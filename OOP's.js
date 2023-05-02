// Object Oriented Programming(OOP)
// Class Definaion
var Arithmatic = /** @class */ (function () {
    function Arithmatic(a, b) {
        this.No1 = a;
        this.No2 = b;
    }
    Arithmatic.prototype.Addition = function () {
        var Ans = 0; // Local Variable
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithmatic.prototype.Subtraction = function () {
        var Ans = 0; // Local Variable
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithmatic;
}());
var obj1 = new Arithmatic(10, 11);
var obj2 = new Arithmatic(20, 21);
var Ret = 0;
Ret = obj1.Addition();
console.log("Addition is : " + Ret);
Ret = obj1.Subtraction();
console.log("Subtraction is : " + Ret);
Ret = obj2.Addition();
console.log("Addition is : " + Ret);
Ret = obj2.Subtraction();
console.log("Subtraction is : " + Ret);
//Kay Karaych ahe?	(Behaviours/Functions)
//Addition & Sbtraction
//Te karnykarta ky lagnar ahe?	(Characteristics/Variables)
//2 numbers value thewayaela ani 1 number answer thewayeala
