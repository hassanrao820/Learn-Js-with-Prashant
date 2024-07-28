// Create a Object  to represent product from Myntra
let product = {
    name: 'T-Shirt',
    price: 100,
    color: 'Red',
    size: 'L',
    rating: 4,
    'delivery-time': 'same day of order',
}
let copyProduct = product;
console.log(copyProduct);
copyProduct.name = 'Shirt';
console.log(copyProduct);
copyProduct.price = 200;
console.log(copyProduct);
console.log(copyProduct["delivery-time"]);

let Object = {
    msg: 'Good Job',
    status: 'Complete',
    review: 'Excellent',
}
console.log(Object);
let {msg, status} = Object;
console.log(status);
console.log(msg);

function isIdenticalProduct(product1, product2) {
    if(typeof product1 !== 'object' || typeof product2 !== 'object') {
        console.warn('Parameter pass was not object');
        return false;
    }
    if (product1 == product2) {
        return true;
    }
    if(product1.name === product2.name && product1.price === product2.price && product1.color === product2.color && product1.size === product2.size && product1.rating === product2.rating) {
        return true;
    } else {
        return false;
    }
}
let product2 = {
    name: 'T-Shirt',
    price: 100,
    color: 'Black',
    size: 'XL',
    rating: 10,
    'delivery-time': 'same day of order',
}
let product3 = {
    name: 'T-Shirt',
    price: 100,
    color: 'White',
    size: 'XL',
    rating: 10,
    'delivery-time': 'same day of order',
}
console.log(isIdenticalProduct(product, ''));
console.log(isIdenticalProduct(product, product));
console.log(isIdenticalProduct(product3, product2));
console.log(isIdenticalProduct(product2, product2));
console.log(isIdenticalProduct(product2, product3));
console.log(isIdenticalProduct(product3, product3));