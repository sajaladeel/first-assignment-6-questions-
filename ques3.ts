// check if a number is positive , negative or zero
function checknumber(number: number): string {
    if (number > 0) {
      return "the number is positive.";
    } else if (number < 0) {
      return "the number is negative.";
    } else {
      return "the number is zero";
    }
  }
  //now check this if this function works.
  console.log(checknumber(8)); //positive
  console.log(checknumber(-4)); //negative
  console.log(checknumber(0)); //zero