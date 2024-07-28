let product = {
    name: 'Apple',
    price: 200000,
    discount: 0.1,
    stock: 20,
        display: function() {
            console.log(`The Price of ${this.name} is ${this.price}`);
            console.log(`The discount on ${this.name} is ${product.discount}`);
            console.log(`The stock of ${product.name} is ${this.stock}`);
        }
}

product.display();