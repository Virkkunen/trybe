const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = () => {
  setTimeout(() => console.log(`A temperatura de Marte é: ${getMarsTemperature()} graus celsius`), messageDelay());
}; // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo

sendMarsTemperature();