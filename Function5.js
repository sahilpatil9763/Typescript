function main() {
    //var no:number = 12;
    var bret;
    bret = CheckEven(12);
    if (bret == true) {
        console.log("It is Even number");
    }
    else {
        console.log("It is Odd number");
    }
}
function CheckEven(Value) {
    if ((Value % 2) == 0) {
        return true;
    }
    else {
        return false;
    }
}
main();
