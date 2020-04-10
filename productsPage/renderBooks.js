
import { findById } from '../common/utils.js';



export function renderBook(item) {
    

    const list = document.createElement('li');
    const image = document.createElement('img');
    const bookTitle = document.createElement('h2');
    const author = document.createElement('h3');
    const summaryText = document.createElement('p');
    const numberInput = document.createElement('input');
    const button = document.createElement('button');
    const priceText = document.createElement('p');
    const span = document.createElement('span');

    image.src = item.img;
    image.align = 'left';
    bookTitle.textContent = item.id;
    author.textContent = item.author;
    summaryText.textContent = item.summary;
    summaryText.id = 'summary';
    numberInput.type = 'number';
    numberInput.id = item.id;
    button.value = item.id;
    button.textContent = 'Add to Cart';
    priceText.textContent = `$ ${item.price}`;


    list.append(image, bookTitle, author, summaryText, numberInput, button, priceText);
    

    

    button.addEventListener('click', () => {
        const booksWanted = document.getElementById(item.id).value;
        let shopCart = localStorage.getItem('CART');
    
        if (!shopCart) {
            shopCart = [];
        } else {
            shopCart = JSON.parse(shopCart);
        }
        
        const bookInCart = findById(shopCart, item.id);

        if (!bookInCart) {
            shopCart.push({
                id: item.id,
                quantity: Number(booksWanted)
            });
        } else if (bookInCart){
            bookInCart.quantity += Number(booksWanted);
        }

        alert(`You added ${booksWanted} copies of ${item.id} to the cart`);

        const stringedArray = JSON.stringify(shopCart);
        localStorage.setItem('CART', stringedArray);

    });
    return list;
}