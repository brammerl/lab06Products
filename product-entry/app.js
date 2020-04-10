import { addProduct } from './addProduct.js';

const form = document.getElementById('newProduct');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newEntry = new FormData(form);

    const entryObj = {
        id: newEntry.get('id'),
        author: newEntry.get('author'),
        summary: newEntry.get('summary'),
        price: Number(newEntry.get('price')),
        img: newEntry.get('img')
    };

    addProduct(entryObj);
});
