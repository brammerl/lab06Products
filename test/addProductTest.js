import { addProduct } from '../product-entry/addProduct.js';

const test = QUnit.test;

test('testing add product test', function(assert) {   
    localStorage.setItem('STOCK', '[]');


    const obj = {
        id: 'All About Love',
    };

    addProduct(obj);
    const ans2 = localStorage.getItem('STOCK');

    // eslint-disable-next-line no-useless-escape
    const expected = `[{\"id\":\"All About Love\"}]`;

    assert.equal(ans2, expected);
       
});