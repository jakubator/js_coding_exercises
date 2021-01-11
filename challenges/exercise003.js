function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(x => x * x);
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
  let subjects = 0;
  for (let i = 0; i < people.length; i++) {
    subjects += people[i].subjects.length;
  }
  return subjects;
}
function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let menuItem = menu.find((dishes) => {
    return dishes.ingredients.includes(ingredient);
  });
  if (menuItem !== undefined) return true;
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const duplicateNumArray = arr1.filter(value => arr2.includes(value)).sort((a, b) => a - b);
  return [...new Set(duplicateNumArray)];
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
