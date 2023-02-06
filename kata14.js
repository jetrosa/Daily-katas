const getLength = (array) => {
    let count = 0;
  
    array.forEach(x => {
        count += (Array.isArray(x) ? getLength(x) : 1)
    })
    return count
  }

//const getLength = arr => arr.flat(Infinity).length;

console.log(getLength([]));// ➞ 3
console.log(getLength([1, [2, [3, 4]]]));// ➞ 4
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));// ➞ 6
console.log(getLength([1, [2], 1, [2], 1]));// ➞ 5