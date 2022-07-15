var arr=[234,567,444,678,456,350,484,5]
arr.forEach(function (element) {
    const isPrime = checkPrime(element);
    if (isPrime) {
      console.log(`${element} is a prime number`);
    } else {
      console.log(`${element} is NOT a prime number`);
    }
  });
  function checkPrime(number) {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    }
  }

 