/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
  
    let factor =1
    for (i=1; i<=num; i++) {
        factor *= i;
    }
    return factor
  }
  console.log(factorial(5))


function stringReverse(string) {
  
    
    let newString =''
        for (i = string.length - 1; i >= 0; i--) {
            newString += string[i];

    }
    return newString
  }
console.log(stringReverse("Pemba"))


// do not use built in slice method.
function slicer(originalString, startIdx, endIdx) {

}

function addTheEvens(num) {

}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
