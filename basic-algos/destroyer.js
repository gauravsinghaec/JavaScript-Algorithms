/**
 * You will be provided with an initial array (the first argument in the destroyer function), 
 * followed by one or more arguments. Remove all elements from the initial array that are of 
 * the same value as these arguments.
 */

function destroyer(arr) {
  // We can use the rest parameter as well
  const args = Array.prototype.slice.call(arguments,1);
  return arr.filter(function(val){
    return args.indexOf(val) === -1;
  });
}

/*
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"]
*/
