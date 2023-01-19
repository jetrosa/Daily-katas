/*
Create a function that takes an array of strings and returns an array
with only the strings that have numbers in them. If there are no strings
containing numbers, return an empty array.
*/

const numInStr = (arr) => {
  let newArr = [];
  for (const str of arr) {
    for (const char of str) {
      if (!isNaN(char) && char != " ") {
        newArr.push(str);
        break;
      }
    }
  }
  return newArr;
};

console.log(numInStr(["1a", "a", "2b", "b"])); // ➞ ["1a", "2b"]
console.log(numInStr(["abc", "abc10"])); // ➞ ["abc10"]
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // ➞ ["ab10c", "a10bc"]
console.log(numInStr(["this is a test", "test1"])); // ➞ ["test1"]
console.log(numInStr(["who needs numbers", "not me"])); // ➞ []
console.log(numInStr(["!!", "##", "@"])); // ➞ []
