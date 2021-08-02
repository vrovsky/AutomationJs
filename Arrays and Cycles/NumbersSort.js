let numbers = [1, 6, 7, 8, 3, 4, 5, 6];

function compare(a, b) {
  return a - b;
}
numbers.sort(compare);
alert(numbers);

let numbersGreaterThanThree = numbers.filter((item) => item > 3);
alert(numbersGreaterThanThree);
