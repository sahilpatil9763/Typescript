//Function defination
function fun()
{
	console.log("Inside fun");
}

//Function call
fun();

function gun(no:number)
{
	console.log("Inside gun:"+no);
}

gun(11);

function sun(no:number):number
{
	var i:number = no;	//Local Variables
	i++;
	return i;
}

var ret:number = 0;
var a:number = 10;  
ret = sun(a);		// Optional   [ret = sun(10);]  Diret declaration

console.log("Return value is : "+ret);