
// Loop: for, while, do-while


function Sequence():void
{
    console.log("Inside Sequence");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
}

function Iteration_For():void
{
    console.log("Iteration_For()");

    var i:number = 0;

    for(i=1; i<=5; i++)
    {
        console.log("Hello");
    }
}

function Iteration_While():void
{
    console.log("Iteration_While()");

    var i:number = 1;

    while(i<=5)
    {
        console.log("Hello");
        i++;

    }
}

Sequence(); 
Iteration_For();
Iteration_While();