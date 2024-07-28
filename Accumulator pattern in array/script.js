// ? Sum of array
let num = [3, 5, 6, 8, 90];
let sum = 0;
for (let i = 0; i < num.length; i++) {
    sum += num[i];
}
console.log(`Sum of array is ${sum}`);

// ?Square of array 
let squares = [];
for (let i = 0; i < num.length; i++) {
    squares.push(num[i] * num[i]);
}
console.log(`Square of array is ${squares}`);

