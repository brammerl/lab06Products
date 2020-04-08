const test = QUnit.test;

test('testing creating a dom in the product page', function(assert) {

//I had to take out certain aspects of the renderBooks.js that call upon the index html of the main page
//this tests the imortant part of building the product block within the html.
    const allAboutLove = {
        id: 1,
        title: `All About Love`,
        author: `Bell Hooks`,
        summary: `This book taught me so much about love and how we as a society approahces love. It truly revolutionized how I love romantically and platonically.`,
        price: `$15.99`,
        img: `https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Allaboutlove.jpg/220px-Allaboutlove.jpg`
    };

    const arrayTest = [allAboutLove];   
    function testFunction(array) {  

        for (let i = 0; i < array.length; i++) {
            const currentBook = array[i];
        
            const list = document.createElement('li');
            const image = document.createElement('img');
            const bookTitle = document.createElement('h3');
            const summaryText = document.createElement('p');
            const button = document.createElement('button');
            const priceText = document.createElement('p');


            list.append(image, bookTitle, summaryText, button, priceText);


            image.src = currentBook.img;
            bookTitle.textContent = currentBook.title;
            summaryText.textContent = currentBook.summary;
            summaryText.id = 'summary';
            button.value = currentBook.id;
            button.textContent = 'Add to Cart';
            priceText.textContent = currentBook.price;

            return list;
        }
    }

    const answer = testFunction(arrayTest);
    const answerOuterHTML = answer.outerHTML;

    const expected = `<li><img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Allaboutlove.jpg/220px-Allaboutlove.jpg"><h3>All About Love</h3><p id="summary">This book taught me so much about love and how we as a society approahces love. It truly revolutionized how I love romantically and platonically.</p><button value="1">Add to Cart</button><p>$15.99</p></li>`;

    assert.equal(answerOuterHTML, expected);
});


