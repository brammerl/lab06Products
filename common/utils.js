export function findById(array, id) {
    
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (item.id === id) {
            return item;
        } 
        {
            return null;
        }
    }
}

export function calcLineFunction(quantity, price) {
    let amount = quantity * price;
    Math.round(amount * 100) / 100;
    return amount;
}