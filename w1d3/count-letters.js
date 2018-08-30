input = process.argv.slice(2);
function countletters(inputString)
{
  charObject = {};
  var noSpaces = inputString.split(" ").join("");
  for(i = 0; i < noSpaces.length; i++)
  {
    if(charObject[noSpaces[i]])
    {
      charObject[noSpaces[i]]+=1;
    }
    else
    {
      charObject[noSpaces[i]] = 1;
    }
  }
return charObject;
}

console.log(countletters(input[0]));