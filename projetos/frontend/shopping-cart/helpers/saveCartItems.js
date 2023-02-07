const saveCartItems = (items) => localStorage.setItem('cartItems', items);
// QI expandindo

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
