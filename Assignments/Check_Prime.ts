function main():void{
    var No:number = 11;
    var bret:boolean;

    bret = Chk_prime(No);
    
    if(bret == true)
    {
        console.log("Given Number is a Prime Number");
    }
    else
    {
        console.log("Given Number is a NOT Prime Number");
    }
}

function Chk_prime(value:number):boolean
{
    if(value % 2 != 0)
    {
        return true;
    }
    else
    {

        return false;
    }
}

main();