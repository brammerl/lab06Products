export function addProduct(obj) {
    
    const stock = localStorage.getItem('STOCK');
    const parsedStock = JSON.parse(stock);
    
    parsedStock.push(obj);

    const stringyObj = JSON.stringify(parsedStock);

    localStorage.setItem('STOCK', stringyObj);

}


