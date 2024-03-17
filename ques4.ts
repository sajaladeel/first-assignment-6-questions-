// to check if a number is even or odd
function checkEvenOrOdd(number: number): string {
    if (number % 2 === 0) {
      return "the number is even.";
    } else {
      return "the number is odd";
    }
  }
  // now check if this is correct
  console.log(checkEvenOrOdd(9)); //odd
  console.log(checkEvenOrOdd(7)); //odd
  console.log(checkEvenOrOdd(10)); //even
  console.log(checkEvenOrOdd(18)); //even....