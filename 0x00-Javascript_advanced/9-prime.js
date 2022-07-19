const countPrimeNumbers = () => {
  let primenos = [];
  for (i = 2; i <= 100; i++) {
    let flag = 1;
    for (n = 2; n < i; n++) {
      if (i % n === 0) {
        flag = 0;
      }
    }
    if (flag === 1) {
      primenos.push(i);
    }
  }
  return primenos;
}

const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);