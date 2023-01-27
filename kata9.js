/*
For this challenge, the input will be a (long) string.
• A word encountered for the first time is a stranger. 
• A word encountered thrice becomes an acquaintance. 
• A word encountered 5 times becomes a friend.
Create a function that takes the string and returns an array of two arrays. 
The first is an array of acquaintances in the order they became an acquaintance (see 
example). 
The second is an array of friends in the order they became a friend. Words in the friend 
array should no longer be in the acquaintance array.
*/

const noStrangers = (str) => {
  const acquaintances = [];
  const friends = [];

  str = str.replace(/[^\w\s\']|_/g, "");
  const words = str.toLowerCase().split(" ");

  const wordMap = {};

  for (let i = 0; i < words.length; i++) {
    if (wordMap[words[i]] === undefined) {
      wordMap[words[i]] = 1;
    }else{
        wordMap[words[i]]++
    }
  }

  for (const word in wordMap) {
    if (wordMap[word] > 4) {
      friends.push(word);
    } else if (wordMap[word] > 2) {
      acquaintances.push(word);
    }
  }
  return [acquaintances, friends];
};

console.log(noStrangers("See Spot run. See Spot jump. Spot likes jumping. See Spot fly."));
