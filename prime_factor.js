function primeFactors(n) {
    const factors = [];
    let divisor = 2;
    
    while (n >= 2) {
      if (n % divisor === 0 && !factors.includes(divisor)) { 
        factors.push(divisor); 
        n /= divisor;
      } else {
        divisor++;
      }
    }
  
    return factors;
  }
  
  // Example usage:
  const num = 24;
  const primeFactorsOfNum = primeFactors(num);
  console.log(`Prime factors of ${num}:`, primeFactorsOfNum);