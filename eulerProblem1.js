// A PROGRAM TO FIND THE SUM OF ALL NUMBERS
// BETWEEN 1 AND 1000 THAT ARE DIVISIBLE BY
// 3 OR 5

var sum = 0;

for (var n = 1; n < 1001; n++) {
  if ((n % 3 === 0) || (n % 5 === 0)) {
    sum += n;
  }
}

console.log(sum);
