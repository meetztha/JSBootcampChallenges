/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
function max(a,b,c) {
  
    max_val = 0;
    if (a>b) 
    {
        max_val = a;
    } else
     {
        max_val = b;
    }
    if (c>max_val)
    {
        max_val = c;
    }
    return max_val;
}
console.log(max(4,5,6))
console.log(max(10,8,6))
console.log(max(20,40,10))



function addUnknown() {

}

function evenOrOdd() {

}

function operator() {

}

module.exports = {
  max, addUnknown, evenOrOdd, operator,
};
