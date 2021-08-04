let numbers = [30, 40, 50, 60];
let getElementIndex = (array, number) => {
  let indexOfEmelent = array.findIndex((element) => element == number);
  return indexOfEmelent;
};

alert(getElementIndex(numbers, 50));
