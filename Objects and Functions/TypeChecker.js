let checkType = function (argument) {
  if (typeof argument == typeof "Hello") {
    console.log("Type of " + argument + " is String");
  } else if (typeof argument == typeof 123) {
    console.log("Type of " + argument + " is Number");
  } else if (typeof argument == typeof true) {
    console.log("Type of " + argument + " is Boolean");
  }
};
checkType("Hello");
checkType(123);
checkType(true);
