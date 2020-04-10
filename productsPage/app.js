// import bookStock from '../data/books.js';
import { renderBook } from './renderBooks.js';

const uList = document.getElementById('productList');
const newProduct = localStorage.getItem('STOCK');
const parsedProduct = JSON.parse(newProduct);



for (let i = 0; i < parsedProduct.length; i++) {
    const item = parsedProduct[i];
    let bookBlock = renderBook(item);

    uList.append(bookBlock,);
}

const stringedStock = JSON.stringify(parsedProduct);

localStorage.setItem('STOCK', stringedStock);
