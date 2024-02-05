var no1:number = 10;
var no2:number = 11;
var ret:number = 0;

ret = Addition(no1,no2);    // Addition(10,11);
console.log("Addition is: "+ret);

function Addition(value1:number, value2:number)
{
    var Ans:number = 0;
    Ans = value1 + value2;
    return Ans;
}