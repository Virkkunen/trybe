function fatorial (num) {
  let result = 1; // resultado sempre será no mínimo 1
  for (let i = 2; i <= num ; i += 1) {
    result = (result * i);
  }
  return result;
}

console.log(fatorial(10));