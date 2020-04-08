import bookStock from '../data/books.js';
import orderOne from '../data/cart.js';
import { renderDom } from './renderDom.js';
import { findById, calcOrderTotal } from '../common/utils.js';

const table = document.getElementById('body');

for (let i = 0; i < orderOne.length; i++){
    const order = orderOne[i];

    const product = findById(bookStock, order.id);

    const dom = renderDom(order, product);

    table.append(dom);
}

const orderTotal = calcOrderTotal(orderOne, bookStock);
const totalTab = document.getElementById('total');

totalTab.textContent = `$ ${orderTotal}`;

