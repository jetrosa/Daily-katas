/*
Write a function that converts a sentence into a simplified pig latin.
Rules for converting to pig latin:
• For words that begin with a vowel (a, e, i, o, u), add "way" to the end of the word.
• Otherwise, move all letters before the first vowel to the end and add "ay".
• For simplicity, no punctuation will be present in the inputs.
*/

const pigLatinSentence = (sentence) => {
  const words = sentence.split(" ");
  const pigWords = [];

  for (const word of words) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === "a"||word[i] === "e"||word[i] === "i"||word[i] === "o"||word[i] === "u"||word[i] === "y") {
        if (i === 0) {
          pigWords.push(`${word}way`);
          break;
        } else {
          pigWords.push(word.substring(i, word.length) + word.substring(0, i)+ "ay");
          break;
        }
      }
      if(i===word.length-1){
        pigWords.push(word);
      }
    }
  }
  return pigWords.join(" ");
};

console.log(pigLatinSentence("this is pig latin")); //➞ "isthay isway igpay atinlay"
console.log(pigLatinSentence("wall street journal")); //➞ "allway eetstray ournaljay"
console.log(pigLatinSentence("raise the bridge")); //➞ "aiseray ethay idgebray"
console.log(pigLatinSentence("all pigs oink")); //➞ "allway igspay oinkway"
