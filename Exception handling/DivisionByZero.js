try {
  let a = 1 / 0;
  if (a === Infinity) throw new SyntaxError("на ноль делить нельзя");
} catch (err) {
  console.log(err.message);
}
