import bookStock from '../data/books.js';
// import orderOne from '../data/cart.js';
import { renderCartLine } from './renderDom.js';
import { findById, calcOrderTotal } from '../common/utils.js';


const button = document.getElementById('orderButton');
const table = document.getElementById('body');
const importedCart = JSON.parse(localStorage.getItem('CART'));



for (let i = 0; i < importedCart.length; i++){
    const order = importedCart[i];

    const product = findById(bookStock, order.id);

    const dom = renderCartLine(order, product);

    table.append(dom);
}

const orderTotal = calcOrderTotal(importedCart, bookStock);
const totalTab = document.getElementById('total');

totalTab.textContent = `$ ${orderTotal}`;

if (!importedCart) {
    button.disabled = true;
}

button.addEventListener('click', () => {
    alert(JSON.stringify(importedCart, true, 2));
    localStorage.removeItem('CART');
    window.location = '../productsPage/index.html';
});



