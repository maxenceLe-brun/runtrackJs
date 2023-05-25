function sommenombrespremiers(a, b) {
  let A = 0
  for (let i = 1; i < a+1; i++) {
    if (a/i == Math.floor(a/i)) {A++;}
  } let B = 0
  for (let j = 1; j < b+1; j++) {
    if (b/j == Math.floor(b/j)) {B++;}
  }
  if (A == 2 && B == 2) {
    console.log(a+b);
  } else {
    console.log("false")
  }
}
