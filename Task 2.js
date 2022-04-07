// Task 6.2

function checkPrimeNumber(a) {
  if (a > 1000 ) {
    console.log('Enter number less than 1000');
  } else if (a === 0 || a === 1) {
    console.log('0 and 1 are not prime numbers');
  } else if (a === 3) {
    console.log('3 is prime number');
  } else if (a === 5) {
    console.log('5 is prime number');
  } else if (a === 7) {
    console.log('7 is prime number');
  } else if (a % 2 !== 0 && a % 3 !== 0 && a % 5 !== 0 && a % 7 !== 0) {
    console.log('The number is prime');
  } else {
    console.log('The number is not prime');
  }
    }
  
  checkPrimeNumber(789);  