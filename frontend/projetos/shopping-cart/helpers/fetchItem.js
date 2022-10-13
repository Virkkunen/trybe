const fetchItem = (id) => {
  if (!id) throw new Error('You must provide an url');
  const item = fetch(`https://api.mercadolibre.com/items/${id}`)
    .then((response) => response.json());
  return item;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
