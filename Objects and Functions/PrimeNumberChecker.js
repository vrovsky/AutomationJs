let isPrime = function (number) {
  if (number <= 1) {
    console.log("Prime nubmer must be greater then 1");
  } else if (number == 2 || number == 3) {
    console.log("Number " + number + " is Prime number");
  } else if (number % 2 == 0 || number % 3 == 0) {
    console.log("Number " + number + " is not Prime number");
  } else console.log("Number " + number + " is Prime number");
};
