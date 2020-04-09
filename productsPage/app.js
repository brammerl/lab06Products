import bookStock from '../data/books.js';
import { renderBook } from './renderBooks.js';

const uList = document.getElementById('productList');

for (let i = 0; i < bookStock.length; i++) {
    const item = bookStock[i];

    let bookBlock = renderBook(item);

    uList.append(bookBlock);
}
