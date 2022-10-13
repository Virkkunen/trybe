const fetchProducts = (prod) => {
  if (!prod) throw new Error('You must provide an url');
  const prods = fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${prod}`)
    .then((response) => response.json());
  return prods;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
