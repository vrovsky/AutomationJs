checkOwnerName = (name) => {
  name = prompt("What is your name?");
  if (name == "Slava") {
    alert("Hello, Slava");
  } else {
    alert("There is no such name");
  }
};
checkOwnerName();
