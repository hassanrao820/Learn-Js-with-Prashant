// * JSON (JavaScript Object Notation)

let product = {
    "name": "iPhone",
    "price": 10000,
    "brand": "Apple",
    "model": "X",
        rating: {   
            star: 10,
            review: "good",
        }
}
console.log(product);
console.log(typeof product);
let str = JSON.stringify(product);
console.log(str);
console.log(typeof str);

// *Local Storage
 // Set item
localStorage.setItem('name', 'product');
localStorage.setItem('name' , str);

// get item
console.log(localStorage.getItem(str));
let pro = JSON.parse(localStorage.getItem(str));
console.log(pro);


// clear all data in local storage
localStorage.clear();


