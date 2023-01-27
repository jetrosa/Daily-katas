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

  const wordMap = new Map();

  for (let i = 0; i < words.length; i++) {
    if (wordMap[words[i]] === undefined) {
      wordMap[words[i]] = 0;
    }else{
        wordMap[words[i]]++
    }
  }

  for (let [key, value] of wordMap.entries()) {
    console.log(value);

    if (value > 4) {
      friends.push(item);
    } else if (value > 2) {
      acquaintances.push(item);
    }
  }
  return [acquaintances, friends];
};

noStrangers("See Spot run. See Spot jump. Spot likes jumping. See Spot fly.");
