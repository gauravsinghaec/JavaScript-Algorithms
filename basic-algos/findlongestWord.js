/* Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/
function findLongestWord(str) {
  arr = str.split(" ");
  arr.sort(function(a,b){
    return b.length- a.length;
  });
  return arr[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
