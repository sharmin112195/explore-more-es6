const numbers = [56, 67, 78, 89, 90, 45, 55, 65, 76];
// const selects = numbers.find(number => number > 60);
// const selects = numbers.find(number => number > 80);
// const selects = numbers.find(number => number % 2 === 0);
const selects = numbers.find(number => number % 2 === 1);
console.log (selects);