const numbers = [4, 5, 7, 1, 2, 66, 67];
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);

const multi = numbers.reduce((p, c) => p * c, 1);
console.log(multi);

const nums = [4, 8]
const divide = nums.reduce ((p, c) => p / c, 32);
console.log(divide);