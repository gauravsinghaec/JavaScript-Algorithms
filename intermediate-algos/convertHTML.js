/* Escape HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  // &colon;&rpar;
  var escaptChar = {'&':"&amp;",'<':"&lt;",'>':"&gt;",'"':"&quot;","'":"&apos;"};
  var re = /[&<>'"]/g;
  var t=str;
  console.log(str);
  if(re.test(str)){
    for(var i=0; i <str.match(re).length;i++ ){
      var ind = t.search(re);
      console.log(t,t[ind],escaptChar[t[ind]]);
      str = str.replace(t[ind],escaptChar[t[ind]]);
      t=str.slice(ind + 1);
    }
  }
  return str;
}

/*
convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List") should return Shindler&​apos;s List.
convertHTML("<>") should return &​lt;&​gt;.
convertHTML("abc") should return abc.
*/