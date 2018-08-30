var myString = process.argv[2];
function obfuscate(myString)
{
	
	var output = "";
	var charArray = myString.split('');
	for(var i = 0; i < charArray.length; i++)
	{
		if(charArray[i] === 'a')
		{
			charArray[i] = '4';
		}
		else if(charArray[i] === 'e')
		{
			charArray[i] = '3';
		}
		else if(charArray[i] === 'i')
		{
			charArray[i] = '1';	
		}
		else if(charArray[i] === 'o')
		{
			charArray[i] = '0';
		}

	}
	output = charArray.join("");

return output;
}

console.log(obfuscate(myString));