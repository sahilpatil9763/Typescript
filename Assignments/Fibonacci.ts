function main():void
{
    var No:number = 21;
    //var Fib:number = 0;

    Fibonacci(No);
}

function Fibonacci(value:number)
{
    var No1:number = 0;
    var No2:number = 1;
    var Sum;
    while(No1 <= value)
    {
        console.log(No1);
        Sum = No1 + No2;
        No1 = No2;
        No2 = Sum;
        //return No1;
    }
}

main();