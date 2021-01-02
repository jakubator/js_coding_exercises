function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  const priceWithVat = originalPrice + originalPrice * (vatRate / 100);
  return Number(priceWithVat.toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  const priceWithReduction = originalPrice - originalPrice * (reduction / 100);
  return Number(priceWithReduction.toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  const l = str.length;
  let startingIndex;
  let numberOfChars;

  if (l % 2 == 0) {
    startingIndex = l / 2 - 1;
    numberOfChars = 2;
  }
  else {
    startingIndex = l / 2;
    numberOfChars = 1;
  }
  return str.substring(startingIndex, startingIndex + numberOfChars);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  return words.reverse().join(" ").split("").reverse().join("").split(" ");
 
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let linux = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].type == "Linux") linux++;
  }
  return linux;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let scoreSum = 0;
  for (let i = 0; i < scores.length; i++) {
    scoreSum += scores[i];
  }
  const meanScore = scoreSum / scores.length;

  if (meanScore % 1 === 0) return parseInt(meanScore);
  else return parseFloat(Number(meanScore).toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 === 0 && n % 5 === 0) {return("fizzbuzz")}
  if (n % 3 != 0 && n % 5 != 0) {return(n)}
  if (n % 3 === 0) {return("fizz")}
  if (n % 5 === 0) {return("buzz")}
  if (n % 3 === 0) {return("fizz")}
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
