function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(n => {
    return n < 1;
  });
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(n => n.charAt(0) == char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(w => {
    const word = w.split(" ");
    if (word[0] == "to") return word;
  });
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(n => {
    return Number.isInteger(n);
  });
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  var result = [];
  var i = 0;
  users.forEach(element =>{
    result.push(users[i].data.city.displayName);
    i++;
  })
  return result;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const squareRoots = nums.map(function(num) {
    return Math.round((Math.sqrt(num)*100))/100;
  });
  return squareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter((sentence) => {
    return sentence.toLowerCase().includes(str.toLowerCase());
  });
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longestSide = triangles.map(function(triangle) {
    return Math.max(...triangle);
  });
  return longestSide;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
