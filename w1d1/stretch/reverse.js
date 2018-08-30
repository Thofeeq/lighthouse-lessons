//Thofeeq Mohamed
//Stretch - Reversing array

argArray = process.argv.slice(2);

function reverse(strArray)
{	
	var charArray=[];
	var reversedArray=[];
	var outputArray=[];
	var string=""; 

	for(i = 0; i < strArray.length; i++)
	{
		charArray = strArray[i].split('');
		for(j = charArray.length-1; j >= 0;j--)
		{
			string = string + String(charArray[j]);
		}
		if(i != strArray.length-1)
		{
			string = string + "\n";
		}
		else
		{
			string = string;
		}
	}
	return string;	
}

console.log(reverse(argArray));