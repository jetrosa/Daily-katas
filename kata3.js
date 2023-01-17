/**
 * Given a string, return if a given letter always appears immediately 
 * before another given letter
 */
const bestFriend = (str, a, b) => {
  let orderTrue = 0; //counter for the matching ordered letter pairs
  for (let i = 0; i < str.length - 1; i++) {
    if (a === str[i]) {
      if (b === str[i + 1]) {
        orderTrue++;
      } else {
        return false; //return false if the second letter does not match
      }
    }
  }
  //return true if the letters matched in the right order at least once
  return orderTrue > 0 ? true : false;
}

console.log(bestFriend("he headed to the store", "h", "e")); //true
console.log(bestFriend("i found an ounce with my hound", "o", "u")); //true
console.log(bestFriend("we found your dynamite", "d", "y")); //false
