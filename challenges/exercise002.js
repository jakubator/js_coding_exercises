function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings ;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  
  return person.city == "Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  var counter = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == "sheep") counter++;
  }
  return counter;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if  (person.address.postCode.substring(0, 1) == "M" && person.address.city === "Manchester") {
      return true;
    }
  return false;
  }
  

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
