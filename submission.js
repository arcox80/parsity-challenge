const findSum = array => {
  const initial = 0;
  const sumCreator = array.reduce(
    (prev, current) => prev + current, initial
  );
  return sumCreator;
};

const findFrequency = arr => {
  let mostLeast = {};
  const totalsObj = arr.reduce((acc, val) => {
    acc[val] ? acc[val] += 1 : acc[val] = 1;
    return acc;
  }, {});
  mostLeast.most = Object.keys(totalsObj).reduce((a, b) => totalsObj[a] > totalsObj[b] ? a : b);
  mostLeast.least = Object.keys(totalsObj).reduce((a, b) => totalsObj[a] < totalsObj[b] ? a : b);
  return mostLeast;
};

const isPalindrome = str => {
  const cleanedUp = str.toLowerCase();
  const possPalindrome = cleanedUp.split("").reverse().join("");
  return (cleanedUp === possPalindrome) ? true : false;
};

const largestPair = array => {
  let prevEl = 0;
  let products = array.map(el => {
    let pairProduct = el * prevEl;
    prevEl = el;
    return pairProduct;
  });
  return products.reduce((currentLargest, possibleLargest) => (currentLargest > possibleLargest ? currentLargest : possibleLargest));
};

const removeParenth = str => {
  return str.replace(/\(.*?\)/g, '');
};

const scoreScrabble = str => {
  const scoreSheet = {
    a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3,
    c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10
  };
  let score = 0;
  for (i = 0; i < str.length; i++) {
    score += scoreSheet[str[i]];
  }
  return score;
};
