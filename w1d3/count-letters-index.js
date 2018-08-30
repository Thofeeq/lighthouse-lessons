function countLetters(str) 
{
  //remove spaces from lighthouse in the house
  var noSpace = str = str.replace(/ /g,'');
  aObj = {};
  //create empty object
  for (var i= 0; i < noSpace.length; i++) 
  {
  //loop through each letter

    if (aObj[noSpace[i]]) 
    {
      aObj[noSpace[i]].push(i);// if more than 1
    } 
    else 
    {
      aObj[noSpace[i]] = [];
      aObj[noSpace[i]].push(i);     
    }
  }
return aObj;
}
console.log(countLetters("lighthouse in the house"));