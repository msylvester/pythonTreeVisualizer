let text = "abbb"
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
const myArray = text.split("");
var unique = myArray.filter(onlyUnique);

console.log(unique); 
