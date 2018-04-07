/* Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/
function sumPrimes(num) {
  var s = 0;
  for(var i=2; i<=num;i++){
    var isPrime = true;
    for(var j=2; j*j <= i; j++){
      if(i % j === 0){
        isPrime = false;
        break;
      }
    }
    if(isPrime){
      s +=i;
      console.log(i,s);
    }
  }
  return s;
}

/*
sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/