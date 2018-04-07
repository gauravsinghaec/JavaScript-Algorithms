/* Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/
function steamrollArray(arr) {
  console.log("Hi");
  // I'm a steamroller, baby
  var a = [];
  var isArr = function(arr1){
    var j=0;
    while(j<arr1.length){
      if(Array.isArray(arr1[j])){
        isArr(arr1[j]);
      }else{
        a.push(arr1[j]);
      }
      j++;
    }
  };
  isArr(arr);
  return a;
}

/*
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/
