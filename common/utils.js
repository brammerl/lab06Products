export function findById(array, id) {

    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        if (item.id === id) {
            return item;
        }
    }
    return null;
}

export function calcLineFunction(quantity, price) {
    let amount = quantity * price;
    Math.round(amount * 100) / 100;
    return amount;
}

export function calcOrderTotal(cartArr, productArr) {
    
    let orderTot = 0;

    for (let i = 0; i < cartArr.length; i++) {

        const items = cartArr[i];
        const productPrice = findById(productArr, items.id);
        const orderTotal = calcLineFunction(items.quantity, productPrice.price);

        orderTot += orderTotal;
    }
    return orderTot;

}