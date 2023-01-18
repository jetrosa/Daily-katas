/*
Create a function that takes a string and replaces the vowels with another character. Also 
output all characters to be lower case.

• a = 1
• e = 2
• i = 3
• o = 4
• u = 5

Examples
replaceVowel("karAchi") ➞ "k1r1ch3"
replaceVowel("chEmBur") ➞ "ch2mb5r"
replaceVowel("khandbari") ➞ "kh1ndb1r3"
replaceVowel("LexiCAl") ➞ "l2x3c1l"
replaceVowel("fuNctionS") ➞ "f5nct34ns"
replaceVowel("EASY") ➞ "21sy"
*/

const replaceVowel = (str) => {
    str = str.toLowerCase();
    let a1 = str.replace(/[a]/g, "1");
    let e2 = a1.replace(/[e]/g, "2");
    let i3 = e2.replace(/[i]/g, "3");
    let o4 = i3.replace(/[o]/g, "4");
    let u5 = o4.replace(/[u]/g, "5");
  
    return u5;
  };

const replaceVowel2 = (str) => {
  str = str.toLowerCase();

  const pairs = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  for (let i = 0; i < str.length; i++) {
    if (str[i] in pairs) {
      str = str.replace(new RegExp(str[i], "g"), pairs[str[i]]);
    } 
  }
  return str;
};

console.log(replaceVowel2("karAchi")); //➞ "k1r1ch3"
console.log(replaceVowel2("chEmBur")); // ➞ "ch2mb5r"
console.log(replaceVowel2("khandbari")); // ➞ "kh1ndb1r3"
console.log(replaceVowel2("LexiCAl")); // ➞ "l2x3c1l"
console.log(replaceVowel2("fuNctionS")); // ➞ "f5nct34ns"
console.log(replaceVowel2("EASY")); // ➞ "21sy"
