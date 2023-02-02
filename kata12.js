/* Create a function that takes a word and returns true if the word has two consecutive 
identical letters */

const doubleLetters=(str)=>{
    for(let i = 0; i<str.length-1;i++){
        if(str[i]===str[i+1]) return true;
    }
    return false;
}

console.log(doubleLetters("loop")); //➞ true
console.log(doubleLetters("yummy")); //➞ true
console.log(doubleLetters("orange")); //➞ false
console.log(doubleLetters("munchkin")); //➞ false