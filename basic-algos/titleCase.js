/* Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  var arr = str.split(" ");
  var newArr = arr.map(function(word){
    word = word.charAt(0).toUpperCase() + word.slice(1,word.length).toLowerCase();
    return word;
  });
  return newArr.join(" ");
}

titleCase("I'm a little tea pot");
