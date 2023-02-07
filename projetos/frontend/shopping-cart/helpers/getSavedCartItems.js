const getSavedCartItems = () => JSON.parse(localStorage.cartItems);

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
