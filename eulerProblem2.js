// A PROGRAM TO FIND THE SUM OF ALL THE EVEN-
// VALUED NUMBERS IN A FIBONACCI SEQUENCE
// THAT DO NOT EXCEED FOUR MILLION

var fib = function ( ) {
  var sum = 0;
  var sumOfSum = 0;
  var num1 = 1;
  var num2 = 1;
  while (sum < 4000000) {
    sum = num1 + num2;
    if ((sum % 2 === 0) && (sum <= 4000000)) {
      sumOfSum += sum;
    }
    num1 = num2;
    num2 = sum;
  }
  return sumOfSum;
};

console.log(fib());
