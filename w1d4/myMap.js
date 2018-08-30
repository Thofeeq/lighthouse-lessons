var words = ["ground", "control", "to", "major", "tom"];




function myMap(arr, func)
{
  newArray = [];
  arr.forEach(function(element){newArray.push(func(element))})

  
  return newArray;

}


var test = myMap(words, function(word) {
  return word.length;
});
console.log(test);
test = myMap(words, function(word) {
  return word.toUpperCase();
});
console.log(test);

test = myMap(words, function(word) {
  return word.split('').reverse().join('');
});
console.log(test);