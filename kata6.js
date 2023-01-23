/*
A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a 
boomerang can be defined as: sub-array of length 3, with the first and last digits being the 
same and the middle digit being different.
Some boomerang examples:
[3, 7, 3], [1, -1, 1], [5, 6, 5]
Create a function that returns the total number of boomerangs in an array.
*/

const countBoomerangs = (arr) => {
  let boomerangs = 0;
  if (arr.length < 3) return "error";
  for (let i = 0; i < arr.length - 2; i++) {
    if (isNaN(arr[i])) return "error";
    if (arr[i] == arr[i + 2] && arr[i] != arr[i + 1]) {
      boomerangs++;
    }
  }
  return boomerangs;
};

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1])); //➞ 2
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9])); // ➞ 1
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9])); // ➞ 0
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1])); // ➞ 5
console.log(countBoomerangs([])); // ➞ error
console.log(countBoomerangs([1, 7])); // ➞ error
console.log(countBoomerangs([1, 7, 1, 7, "one", 7, 1])); // ➞ error
