var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

function findProperty(fID, property)
{
  var result;
  Object.keys(data).forEach(function(person){
    if(person === fID)
    {
      result = data[fID][property];      
    }
  })
    return result;
}

function findNameByIdArray(arr)
{
  var output = [];
  arr.forEach(function(ID)
  {
    output.push((findProperty(ID, "name")));
  })
  return output;
}
function findFollowers(keyID)
{
  var followers = [];
  Object.keys(data).forEach(function(targetID) 
  {
    if(findProperty(targetID, "follows").indexOf(keyID) > -1)
    {
      followers.push(findProperty(targetID,"name"));
    }    
  }
    )
  return followers;
}


function printProfile()
{
Object.keys(data).forEach(function(person)
  {
    console.log(findProperty(person,"name") + ": " +"\n \t Following: " +findNameByIdArray(findProperty(person,"follows")) + "\n \t followers: " + findFollowers(person) + "\n");
  })
}

function printMostFollowers()
{
  length = 0;
  mostFollowerArr = [];
  Object.keys(data).forEach(function(person)
  {
    if(findFollowers(person).length > length)
    {
      length=findFollowers(person).length;
    }
    
  })
  Object.keys(data).forEach(function(person)
  {
    if(findFollowers(person).length === length )
    mostFollowerArr.push(data[person]["name"]); 
  })         
  console.log("People with the most followers are: ")
  mostFollowerArr = String(mostFollowerArr);
  return mostFollowerArr;
}

printProfile();
console.log(printMostFollowers());