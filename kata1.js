//reorder function version 1
function reorder(originalString){

    //returns a new string with all matches of the pattern
    let upperChars = originalString.replace(/[^A-Z]*/g, "");
    let lowerChars = originalString.replace(/[^a-z]*/g, "");
    let numbers = originalString.replace(/[^0-9]*/g, "");
    
    //combine the results in the variables
    const result = upperChars + lowerChars + numbers;
    return result
}

//reorder function version 2
function reorder2(originalString){

    let upperChars = "";
    let lowerChars = "";
    let numbers = "";
    
    //check for each type and add them to a variable
    for (let char of originalString) {
      if (char >= "A" && char <= "Z") {
        upperChars += char;
      } else if (char >= "a" && char <= "z") {
        lowerChars += char;
      } else if (char >= "0" && char <= "9")
        numbers += char;
    }
    
    //combine the results in the variables
    const result = upperChars + lowerChars + numbers;
    return result
}
