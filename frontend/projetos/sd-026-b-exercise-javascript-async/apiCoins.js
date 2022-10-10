const coinList = document.getElementById('coins-list');

const fetchCoins = () => {
  try {
    const coins = fetch('https://api.coincap.io/v2/assets')
      .then((response) => response.json())
      .then((data) => data.data);
    // const coins = reqCoins.data;
    return coins;
  } catch (error) {
    return error;
  }
};

const addCoinsToList = (coins) => {
  coins.slice(0, 10).forEach((coin) => {
    const li = document.createElement('li');
    const coinName = coin.id.charAt(0).toUpperCase() + coin.id.slice(1);
    li.innerText = (`${coinName} (${coin.symbol}): ${Number(coin.priceUsd).toFixed(2)}`);
    coinList.append(li);
  });
};

fetchCoins()
  .then((coins) => addCoinsToList(coins));

// o cérebro expandiu em 5cm