function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(n => n < 1);
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
    if (word[0] === "to") return word;
  });
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(n => Number.isInteger(n));
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map(user => user.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map((num) => {
    return Math.round(Math.sqrt(num) * 100) / 100;
  });
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter(s => s.split(" ").toString().toLowerCase().includes(str.toLowerCase()));
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map(element => Math.max.apply(null, element));
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
