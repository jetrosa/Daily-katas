/* Consecutive Sum Check
Create a function that takes a number n as an argument and checks whether the given 
number can be expressed as a sum of two or more consecutive positive numbers.
*/

function consecutiveSum(selectedNumber){
    let first = 1; //first number to be added to the sum
    let sum = 0;
    let addNumber = 1; //number to be added to the sum
    
    /*iterate until the sum matches the selected number or
      until the first number is too high 
     */
    while(sum!=selectedNumber && first < (selectedNumber/2)){ 
      sum = 0;
      while(sum < selectedNumber){
        sum += addNumber;
        addNumber++;
        //console.log("sum progress: " + sum)
      }
      //console.log("first " + first)
      first+=1;
      addNumber = first;
    }
    //console.log(sum)
    return sum==selectedNumber?true:false;
  }
  console.log(consecutiveSum(9));
  console.log(consecutiveSum(10));
  console.log(consecutiveSum(64));


function consecutiveSum2(num){
    //validate number
    if(isNaN(num))return false;
    if(num<2)return false;
    
    for(let i = 1; i < (num/2); i++){
      let sum = 0;
      
      for(let j = i; j<num; j++){
        sum += j;
        if(sum == num){return true;}
      }
    }
    return false;
  }

console.log(consecutiveSum2(9));
console.log(consecutiveSum2(10));
console.log(consecutiveSum2(64));
