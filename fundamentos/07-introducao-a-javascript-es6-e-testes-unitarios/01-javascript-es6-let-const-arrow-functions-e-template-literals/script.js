// retorne array em ordem crescente
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = () => oddsAndEvens.sort(function(a, b){return a - b});
console.log(sortOddsAndEvens());