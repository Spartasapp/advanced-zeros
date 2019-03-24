module.exports = function getZerosCount(number, base) {
  let n = number;
  let factorial = [];
  let k = 2;
  while (k < base) {
      while (base % k == 0) {
          factorial.push(k);
          base /= k;
      }
      k++;
  }
  if (base > 1) {
      factorial.push(base);
  }
  factorial.sort((a, b) => a - b);

  let zerosCount = [];
  let count = 1;
  for (let i = 0; i < factorial.length; i += count) {
      let counter = 0;
      for (let l = i; l < factorial.length; l++) {
          if (factorial[i] === factorial[l]) {
              counter++;
          } else {
              count = counter;
              break;
          }
      }
      let result = 0;
      let l = factorial[i];
      while (true) {
          result += (n - n % l) / l;
          l *= factorial[i];
          if (l > n) {
              break;
          }
      }
      zerosCount.push((result - result % counter) / counter);
  }

  return Math.min.apply(Math, zerosCount);
}