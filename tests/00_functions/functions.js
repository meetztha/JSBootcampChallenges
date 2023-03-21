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
console.log(max(20,40,10 ))



function addUnknown(num1,num2,num3,num4,num5) {

  
    if (!num3 && !num4 && !num5){
        return num1+num2}
        else if(!num4 && !num5) {
            return num1+num2+num3}
            else {
                return num1+num2+num3+num4+num5
            }
            
                    }
                        
               
console.log(addUnknown(10,10,10,10,100))
console.log(addUnknown(3,4,5))
console.log(addUnknown(2,2))


function evenOrOdd(number) {
  
    if (number % 2 ==0){
        return "even"
    }
    else {
        return "odd"
    }
}
console.log(evenOrOdd(10))
console.log(evenOrOdd(3))


function operator(p,q,r) {
  
    if (p +q ===r) {
        return "plus"
    }
    else if (p - q === r){
        return "minus"
    }
    else if (p * q === r){
        return "multiply"
    }
    else if ( p / q ===r){
        return "divide"
    }
    else {
      return null
    }
}
console.log(operator(5,5,10))
console.log(operator(8,2,6))
console.log(operator(7,5,35))
console.log(operator(24,8,3))
console.log(operator(124,2345,1))



module.exports = {
  max, addUnknown, evenOrOdd, operator,
};
