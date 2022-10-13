// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

const cart = document.getElementsByClassName('cart__items')[0];
const priceText = document.getElementsByClassName('total-price')[0];
const loadingScreen = document.getElementsByClassName('loading')[0];

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

const addLoadingScreen = () => { loadingScreen.style.display = 'flex'; };
// não pode só remover o display, tem que remover do DOM
// const delLoadingScreen = () => { loadingScreen.style.display = 'none'; };
const delLoadingScreen = () => { loadingScreen.parentNode.removeChild(loadingScreen); };

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const totalPrice = async () => {
  const cartItems = Object.values(cart.children);
  // reduce pra pegar o preco do texto e calcular
  const finalPrice = cartItems.reduce((acc, item) => {
    const price = item.innerText.match(/(?<=PRICE: \$)[0-9.]+/);
    // 3h estudando esse regex
    return acc + Number(price);
  }, 0);
  priceText.innerText = `Total: R$${finalPrice}`;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

// /**
//  * Função que recupera o ID do produto passado como parâmetro.
//  * @param {Element} product - Elemento do produto.
//  * @returns {string} ID do produto.
//  */
// const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

const cartItemClickListener = (e) => {
  const dad = e.target.parentElement;
  dad.removeChild(e.target);
  // atualizar preço
  totalPrice();
};

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createProductItems = async () => {
  addLoadingScreen();
  const products = await fetchProducts('computador');
  const items = document.getElementsByClassName('items');

  products.results.forEach((prod) => { // faltou os resultados
    const element = createProductItemElement(prod);
    items[0].appendChild(element); // e faltou a posição do elemento
  });
  delLoadingScreen();
};

// acho que está na posição certa agora
const saveItems = () => {
  const items = document.querySelectorAll('.cart__item');
  const objArr = []; // iniciar o objeto vazio

  items.forEach((item) => {
    // 🤙 ➡️ 🐴
    const cleanItem = item.innerText.split(' | ');
    const cleanstdItem = cleanItem.map((c) => c.replace(/(ID: |TITLE: |PRICE: \$)/, ''));
    // hora de arquitetar o objeto 
    objArr.push({
      id: cleanstdItem[0],
      title: cleanstdItem[1],
      price: cleanstdItem[2],
    });
  });
  saveCartItems(JSON.stringify(objArr));
};

const addToCart = async (e) => {
  // console.log(e.target);
  // olha a gambiarra
  const id = e.target.parentElement.children[0].innerText;
  const fetchedId = await fetchItem(id);

  // create li
  const li = createCartItemElement(fetchedId);
  cart.appendChild(li);

  // save
  saveItems();

  // atualizar preços
  totalPrice();
};

const addClickToItemButtons = () => {
  const items = document.querySelectorAll('.item__add');
  items.forEach((i) => i.addEventListener('click', addToCart));
};

const restoreCart = () => {
  if (!localStorage.cartItems) return;

  const restoredItems = getSavedCartItems();
  restoredItems.forEach((item) => {
    const li = createCartItemElement(item);
    cart.appendChild(li);
  });
  // atualizar preços
  totalPrice();
};

const emptyCart = () => {
  localStorage.removeItem('cartItems');
  cart.innerHTML = '';
  totalPrice();
};

window.onload = async () => {
  restoreCart();

  await createProductItems(); // mostrar os itens na página

  addClickToItemButtons(); // click nos botões de adicionar ao carrinho

  document.getElementsByClassName('empty-cart')[0].addEventListener('click', emptyCart);
};
