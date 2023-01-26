/*
In this challenge, you have to implement an algorithm to establish if a given positive 
integer num is a Happy number, and how many steps of the algorithm are needed to establish 
it.
You have to repeatedly transform the given num into the sum of its squared digits:
• If after the transformation the new number is equal to 1 , num is a Happy number and 
the algorithm stops.
• If after the transformation, the new number is not equal to 1 , you have to transform it 
again.
*/

const happyAlgorithm = (num) => {
  let digitStr = num.toString().split("");
  let digits = digitStr.map(Number);

  let loop = false;
  const history = [];
  let steps = 0;
  let sum = 0;
  while (sum !== 1 && !loop) {
    sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum += digits[i] * digits[i];
    }

    digitStr = sum.toString().split("");
    digits = digitStr.map(Number);
    steps++;

    for (let i = 0; i < history.length; i++) {
      if (history[i] === sum) {
        loop = true;
      }
    }
    history.push(sum);
  }
  return !loop?("HAPPY " + steps):("SAD " + steps);
};

console.log(happyAlgorithm(67));
