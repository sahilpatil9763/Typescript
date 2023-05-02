var Ret = 0;
//Regular Function
function Addition1(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
Ret = Addition1(10, 11);
console.log("Addition is : " + Ret);
// Anonymous Function (Function without name)
var Addition2 = function (No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
};
Ret = Addition2(10, 11);
console.log("Addition is : " + Ret);
// Fat arrow/Lambda/Arrow function
var Addition3 = function (No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
};
Ret = Addition3(10, 11);
console.log("Addition is : " + Ret);
// Proocedure Oriented Programming (POP)
function Addition(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
function Subtraction(No1, No2) {
    var Ans = 0;
    Ans = No1 - No2;
    return Ans;
}
var Value1 = 10;
var Value2 = 11;
var Ret = 0;
Ret = Addition(Value1, Value2);
console.log("Addition is : " + Ret);
Ret = Subtraction(Value1, Value2);
console.log("Subtraction is : " + Ret);
