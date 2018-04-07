/* Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/


function translatePigLatin(str) {
  var v = ['a','e','i','o','u','A','E','I','O','U'];
  var ind = v.indexOf(str.charAt(0));
  if(ind !== -1){
      str += "way";
  }else{
      var re = /[aeiou]/i;
      var p = str.search(re);
      var a = str.split('');
      var c = a.splice(p);
      str = c.concat(a).join('');
      str += "ay";
  }
    console.log(str);
  return str;
}

/*
translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
*/