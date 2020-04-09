const test = QUnit.test;

import orderOne from '../data/cart.js';
import { findById, calcLineFunction, calcOrderTotal } from '../common/utils.js';

test('testing findById Function', function(assert) {
    const testId = 'Saturn';
    const expected = 'Saturn';

    const answer = findById(orderOne, testId);

    assert.ok(answer);
    assert.equal(answer.id, expected);
});

test('testing calcLineItem fxn', function(assert) {
    const testQuantity = 3;
    const testPrice = 14.99;
    const testTotal = calcLineFunction(testQuantity, testPrice);

    const expected = 44.97;

    assert.equal(testTotal, expected);
});

test('testing orderTotal fxn', function(assert) {
    const testCart = [{
        id: 'Saturn',
        quantity: 2
    }];
    const testProduct = [{
        id: 'Saturn',
        author: `Nao`,
        summary: `An amazing partner to Nao's album. Nao explores the concept of one's  Saturn years(s) through self reflection, reader involvement and photography`,
        price: 12.99,
        img: `data:image/jpeg;base64,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`
    }];
    
    const answer = calcOrderTotal(testCart, testProduct);
    const expected = '25.98';

    assert.equal(answer, expected);
});

