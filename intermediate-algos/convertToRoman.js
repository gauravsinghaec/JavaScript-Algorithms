/* Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/


function convertToRoman(num) {
  var a = [['M',1000],['D',500],['C',100],['L',50],['X',10],['V',5],['I',1]];
  var ar = [];
  var fn = function(a){
    for(var i = 0;(i<a.length );i++){
    var d = Math.floor(num / a[i][1]);
    var r = num % a[i][1];
      // console.log(num,a[i][1],d,r,ar);
      if(d === 1 && r && Math.floor(r / a[i+1][1]) === 4){
        switch(a[i][0]){
          case 'D':
            ar.push('CM');
            break;
          case 'L':
            ar.push('XC');
            break;
          case 'V':
            ar.push('IX');
            break;
          default:

         }num = r % a[i+1][1];
        }else if(d === 4){
          switch(a[i][0]){
            case 'C':
              ar.push('CD');
              break;
            case 'X':
              ar.push('XL');
              break;
            case 'I':
              ar.push('IV');
              break;
            default:

          }num = r;
        }else{
          switch(d){
            case 3:
              ar.push(a[i][0]);
              ar.push(a[i][0]);
              ar.push(a[i][0]);
              break;
            case 2:
              ar.push(a[i][0]);
              ar.push(a[i][0]);
              break;
            case 1:
              ar.push(a[i][0]);
              break;
            default:

          }num = r;
        }
    }
  };
    if (num>=1000 && num<4000){
      fn(a);
    }
    else if(num>=500 && num<1000){
      a = a.splice(1);
      fn(a);
    }
    else if(num>=100 && num<500){
      a = a.splice(2);
      fn(a);
    }
    else if(num>=50 && num<100){
      a = a.splice(3);
      fn(a);
    }
    else if(num>=10 && num<50){
      a = a.splice(4);
      fn(a);
    }
    else if(num>=5 && num<10){
      a = a.splice(5);
      fn(a);
    }
    else if(num>=1 && num<5){
      a = a.splice(6);
      fn(a);
    }
  // console.log(ar.join(''));

  return ar.join('');
}

/*
convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"
*/
