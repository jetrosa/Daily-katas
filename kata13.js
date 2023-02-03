/* Write a function that returns true if there exists at least one number that is larger than 
or equal to n  */

const existsHigher=(arr, num)=>{
    for(let i = 0; i<arr.length;i++){
        if(arr[i]>=num) return true;
    }
    return false;
}

const existsHigher2=(arr, num)=>{
    return (arr.some((n) => n >= num));
}

console.log(existsHigher2([5, 3, 15, 22, 4], 10));// ➞ true
console.log(existsHigher2([1, 2, 3, 4, 5], 8));// ➞ false
console.log(existsHigher2([4, 3, 3, 3, 2, 2, 2], 4));// ➞ true
console.log(existsHigher2([-10, -99, -57, -4], -4));// ➞ true
console.log(existsHigher2([5], 5));// ➞ true
console.log(existsHigher2([99, 99], 99));// ➞ true
console.log(existsHigher2([], 5));// ➞ false