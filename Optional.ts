//Optional Arguments

function Demo(no1:number, no2?:number)
{
	console.log("Inside Demo");
	if(no2 != undefined)
	{
		console.log("Value of no2 : "+no2);
	}
}

Demo(10,11);		// no1 = 10	no2 = 11
Demo(10);		// no1 = 10 	no2 = undefined
