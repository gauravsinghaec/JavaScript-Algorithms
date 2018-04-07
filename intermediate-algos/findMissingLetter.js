/* Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined
*/

function fearNotLetter(str) {
  var st = "";
  var last = str.charCodeAt(str.length-1);
  var start = str.charCodeAt(0);
  for(var i=start; i<=last;i++){
      if(str.indexOf(String.fromCharCode(i)) === -1){
        st += String.fromCharCode(i);
      }
  }
  console.log(st);
  return st?st:undefined;
}

/*
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.
*/