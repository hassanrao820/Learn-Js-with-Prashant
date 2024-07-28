//! Old way of write function
let sum = function(a, b) {
    return a + b;
}
console.log(sum(3, 5));

//! New way of write function using arrow function
let sum1 = (a, b) =>{
    return a + b;
}
console.log(sum1(3, 5));

//! For single argument arrow function can be written as:-

let sqr = x => {
    return x * x;
};
console.log(sqr(5));

//* Another Example.
let square = x => x * x;
console.log(square(5));