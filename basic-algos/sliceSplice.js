/**
 * Use the array methods slice and splice to copy each element of the first array 
 * into the second array, in order. Begin inserting elements at index n of the second array.
 * Return the resulting array. The input arrays should remain the same after the function runs
 * @param {*} arr1 
 * @param {*} arr2 
 * @param {*} n starting index where the insertion will begin
 */
function frankenSplice(arr1, arr2, n) {
    let x = arr2.slice(0);
    x.splice(n,0,...arr1);
    return x;
  }
  
/*
 frankenSplice([1, 2, 3], [4, 5, 6], 1) should return [4, 1, 2, 3, 5, 6].
 frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
*/