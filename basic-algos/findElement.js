/**
 * Create a function that looks through an array (first argument) and returns the 
 * first element in the array that passes a truth test (second argument). 
 * If no element passes the test, return undefined.
 * @param {*} arr 
 * @param {*} func 
 */
function findElement(arr, func) {
  let result = undefined;
  for(const elem of arr){
    if(func(elem)){
      result = elem;
      break;
    }
  }
  return result;
}

// findElement([1, 2, 3, 4], num => num % 2 === 0);