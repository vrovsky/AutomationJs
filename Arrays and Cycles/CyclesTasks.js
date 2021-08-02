for (let a = 20; a > 9; a--) {
  console.log(a);
}

for (let i = 2; i < 20; i++) {
  if (i == 2 || i == 3) {
    console.log(i);
  } else if (i % 2 == 0 || i % 3 == 0) {
    continue;
  } else {
    console.log(i);
  }
}

for (let b = 0; b < 10; b++) {
  if (!(b % 2 == 0)) {
    console.log(b);
  }
}
