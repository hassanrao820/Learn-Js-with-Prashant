let Product = {
    name: 'iPhone',
    price: 10000,
    stock: 10,
}
console.log(Product);
console.log(Product.name);
console.log(Product.price);
console.log(Product.stock);

Product.name = 'Samsung'; // we can change the name by using this, in further.
console.log(Product);
console.log(Product ['name']); // another method to access the object by using this
console.log(Product ['price']); // another method to access the object by using this
console.log(Product ['stock']); // another method to access the object by using this

delete Product.name; // we can delete the name by using this.
console.log(Product); // now the name property is deleted.

delete Product['name']; //another method we can delete the price by using this.
console.log(Product); // now the name of company is deleted.

