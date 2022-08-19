let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function exercicio01 (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}

function exercicio02 (numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  console.log(result);
}

function exercicio03 (numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  result = (result / numbers.length);
  console.log(result);
}

exercicio03(numbers);