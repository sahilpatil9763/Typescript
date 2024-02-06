function main():void
{
    var r:number = 5;
    var Area:number = 0;

    Area = Area_Of_Circle(r);
    console.log("Area of Circle is : "+Area);
}

function Area_Of_Circle(value:number):number
{
    var Pi:number = 3.14;
    var C_Area:number = 0;

    C_Area = Pi * value * value;

    return C_Area;
}

main();