/* Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

function smallestCommons(arr) {
  arr.sort();
  var lcm = arr[arr.length -1];
  for(var num = arr[0]; num < arr[arr.length-1]; num++){
    var j = 2, L= lcm;
    while(lcm % num !== 0){
      lcm = L*j;
      j++;
    }
  }
  return lcm;
}

/*
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
*/