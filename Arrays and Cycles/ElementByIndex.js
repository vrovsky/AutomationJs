let numbers = [30, 40, 50, 60];
let getElementOfArray = function (array, number) {
  let indexOfEmelent = array.findIndex((element) => element == number);
  return indexOfEmelent;
};

alert(getElementOfArray(numbers, 50));
