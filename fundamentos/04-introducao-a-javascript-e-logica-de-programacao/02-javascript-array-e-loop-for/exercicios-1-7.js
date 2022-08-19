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

function exercicio04 (numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  result = (result / numbers.length);
  console.log(result > 20 ? "Valor maior que 20." : "Valor menor que 20.");
}

function exercicio05 (numbers) {
  let biggest = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggest) biggest = numbers[i];
  }
  console.log(biggest);
}

function exercicio06 (numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 > 0) count++;
  }
  console.log(count > 0 ? count : "Não há valores ímpares.");
}

function exercicio07 (numbers) {
  let smallest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) smallest = numbers[i];
  }
  console.log(smallest);
}

function exercicio08 () {
  let arr = [];
  for (let i = 0; i < 25; i++) {
    arr[i] = (i + 1);
  }
  console.log(arr);
}

exercicio08(numbers);