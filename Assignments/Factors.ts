function main() : void
{
    var No1 : number = 20;

    Display_Factors(No1);
}

function Display_Factors(value:number)
{
    var i:number = 0;
    console.log("Factors of given number are:");

    for(let i = 1 ; i <= 10 ; i++)
    {
        if(value % i === 0 )
        console.log(i);
        
    }

}

main();