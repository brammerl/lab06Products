
export function renderBook(array) {
    const uList = document.getElementById('productList');
    
    for (let i = 0; i < array.length; i++) {
        const currentBook = array[i];
        
        const list = document.createElement('li');
        const image = document.createElement('img');
        const bookTitle = document.createElement('h3');
        const summaryText = document.createElement('p');
        const button = document.createElement('button');
        const priceText = document.createElement('p');

        uList.append(list);
        list.append(image, bookTitle, summaryText, button, priceText);


        image.src = currentBook.img;
        bookTitle.textContent = currentBook.title;
        summaryText.textContent = currentBook.summary;
        summaryText.id = 'summary';
        button.value = currentBook.id;
        button.textContent = 'Add to Cart';
        priceText.textContent = currentBook.price;
    }
}
