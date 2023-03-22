/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
return str.includes(letter)
}
let str = "well hello"
let letter ="g"
console.log(doesInclude(str,letter))


function cap(str, letter) {

}

function firstCharacter(str1, str2) {
if (str1.startsWith(str2[0]) && str2.startsWith(str1[0])){
return true
//}else if (str1.toUpperCase(str2[0]) && str2.toUpperCase(str1[0])){
  //return true
//}
} else {
  return false
}
}
console.log(firstCharacter("body","Beauty"))


module.exports = {
  cap, firstCharacter, doesInclude,
};
