let numbers = [1, 6, 7, 8, 3, 4, 5, 6];

function compare(a, b) {
  return a - b;
}
numbers.sort(compare);

let numbersGreaterThanThree = numbers.filter((item) => item > 3);
