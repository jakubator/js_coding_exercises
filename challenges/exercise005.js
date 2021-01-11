const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let index = nums.indexOf(n);
  if (index > 0 && index < nums.length - 1) {
    let nextItem = nums[index + 1]
    return nextItem;
  }
  return null
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let keysDict = {
    1: 0,
    0: 0
  };
  for (let i = 0; i < str.length; i++) {
    let chr = str[i];
    if (keysDict[chr] !== undefined) {
      keysDict[chr] += 1;
    }
  }
  return keysDict;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return (
    parseFloat(
      n
        .toString()
        .split('')
        .reverse()
        .join('')
    )
  )
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let total = 0;
  for (let i = 0; i < arrs.length; i++) {
    for (let j = 0; j < arrs[i].length; j++) {
      total += arrs[i][j];
    }
  }
  return total;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 1) return [];
  else {
    let first = arr[0];
    let last = arr[arr.length - 1];
    arr[0] = last;
    arr[arr.length - 1] = first;

    return arr
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let needle = false;

  Object.keys(haystack)
    .forEach(k => {
      if (haystack[k].toString().toLowerCase()
        .includes(searchTerm.toLowerCase())) { needle = true };
    });

  return (needle);
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  const freq = {};
  let cleansed = str.replace(/[,!?]/g, "").toLowerCase();
  const list_words = cleansed.split(' ')
  for (let i = 0; i < list_words.length; i++) {
    const word = list_words[i].toLowerCase();
    if (freq[word] === undefined) {
      freq[word] = 1;
    }
    else freq[word] += 1;
  }
  return freq;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
