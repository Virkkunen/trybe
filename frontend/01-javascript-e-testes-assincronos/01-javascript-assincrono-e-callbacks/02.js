const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = (option) => {
  const celsius = getMarsTemperature();
  if (!option) setTimeout(() => console.log(`A temperatura de Marte é: ${celsius} graus celsius`), messageDelay());
  if (option === temperatureInFahrenheit) {
    setTimeout(() => temperatureInFahrenheit(celsius), messageDelay());
  }
  if (option === greet) {
    setTimeout(() => greet(celsius), messageDelay());
  };
}; // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo

sendMarsTemperature();
sendMarsTemperature(temperatureInFahrenheit);
sendMarsTemperature(greet);