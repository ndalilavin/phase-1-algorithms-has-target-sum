function hasTargetSum(array, target) {
  // Write your algorithm here
  // Iterate through each number in an array
  for( i =0; i<array.length; i++){
    // for the current num, identify a compliment that adds up to target
   const compliment = target - array[i];
   // iterate through the rest of array
   for(let j = i+1; j<array.length; j++){
    // check if any of number is a compliment and return true if it is
    if( array[j] === compliment)return true;
   }

  }
  //if end of array, return false
  return false;
//   // Write your algorithm here
}


/* 
  Write the Big O time complexity of your function here
 //The time complexity is o(n) hence it is linear
 //The space complexity is o(n) since the seenNumbers will grow in proportion to the size of the input array
*/

/* 
  Add your pseudocode here
*/
  //Write a function hasTargetSum that adds two arrays that add up to target
  //If the target is right, then return true and if not return false.

/*
// Add written explanation of your solution here
//The i represents one of numbers in an array and j represents another one in which 
//the loop iterates over it to ensure the target is met which after iteration returns true or false
*/

// You can run `node index.js` to view these console logs


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
