/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE


function isPrime(num) {
  if ((num % 2) > 0) {
    console.log("true")
  }
  else {
    console.log("false")
  }
}

isPrime(3456);
isPrime(199);