import { calcLineFunction } from '../common/utils.js';

export function makePriceReadable(number) {
    // put your toFixed HERE
    const price = `$${number}`;
    return price;
}

export function renderCartLine(cartItem, corrProduct) {
  
    const tr = document.createElement('tr');

    const tableDataItem = document.createElement('td');
    const tableDataQuant = document.createElement('td');
    const tableDataPrice = document.createElement('td');
    const tableDataSubTotal = document.createElement('td');

    tableDataItem.textContent = cartItem.id;
    tableDataQuant.textContent = cartItem.quantity;
    tableDataPrice.textContent = makePriceReadable(corrProduct.price);
    const price = calcLineFunction(cartItem.quantity, corrProduct.price);  
    tableDataSubTotal.textContent = `$ ${price}`;
    
    tr.append(tableDataItem, tableDataQuant, tableDataPrice, tableDataSubTotal);

    return tr;
}

