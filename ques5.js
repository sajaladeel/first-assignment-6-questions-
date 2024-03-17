"use strict";
//to check if a person is eligible to vote or not
function checkEligibility(age) {
    if (age >= 18) {
        return " yes, he is eligible to vote.";
    }
    else {
        return "no, he is not eligible to vote.";
    }
}
//now check this
console.log(checkEligibility(20)); //yes
console.log(checkEligibility(13)); //nos
