argArray = process.argv;
input = process.argv[2];

const SIDES = 6;

function roleDice(numOfDice)
{
  outputArray = [];
  finalOutput = "";
  for(var i = 0; i < numOfDice; i++)
  {
    outputArray.push(Math.floor(Math.random() * Math.floor(SIDES)));
  }
  var rolledNums = outputArray.join(', ');
  finalOutput = "Rolled " + String(numOfDice) + " dice: " + rolledNums; 
  return finalOutput;
}

console.log(roleDice(input));