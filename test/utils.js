const test = QUnit.test;

import orderOne from '../data/cart.js';

import { findById, calcLineFunction } from '../common/utils.js';

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

