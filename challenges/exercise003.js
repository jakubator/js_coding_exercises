function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(x => x*x);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  if (words.length === 0) return "";
  return words.map((value, index) => {
    if (index == 0) return value;

    return value.substring(0, 1).toUpperCase() + value.substring(1, value.length);
  })
    .join("");
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  var subjects = 0;
  for (let i = 0; i < people.length; i++) {
    subjects += people[i].subjects.length;
  }
  return subjects;
}
function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let menu_item = menu.find((dishes) => {
    return dishes.ingredients.includes(ingredient);
  });
  if (menu_item !== undefined) return true;
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  //creating list of dupes
  var dupes = arr1.filter(function(val) {
    return arr2.indexOf(val) != -1;
  });
  //creating dict of seen numbers and storage array
  var seen = {};
  let result = [];
  result = dupes.filter(function(item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
  return result.sort(function(a, b){return a-b});
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
