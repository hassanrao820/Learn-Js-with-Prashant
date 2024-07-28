//? create a variable multiply and assign a function to this variable that multiplies two numbers. call this method from the variable.

let multiply = (num1, num2) => num1 * num2;
console.log(multiply(5, 5));

//? create a function run twice that take a function as a parameter and then runs that method twice.
let greeting = () => console.log("hello");
let runTwice = inputFunction => {
    inputFunction();
    inputFunction();
}
runTwice(greeting)

//? create a button that double the size of the button after 2 sec.
function doubleTheSize() { 
   let button = document.querySelector("#btn");
   button.classList.add("js-btn");
};

//? Add event Listener instead of onclick in above task.
let button = document.querySelector("#btn2");
button.addEventListener('click', event => setTimeout(doubleTheSize2, 2000));
function doubleTheSize2() { 
    let button = document.querySelector("#btn2");
    button.classList.add("js-btn2");
 };
 //? create a function that sum an array of numbers.Using For-each loop.
 let arr = [1,2,3,4,5,6];
 let sum = 0;
 arr.forEach(num => sum += num) ;
 console.log(sum);
 
 //? Create a function that takes an array of a numbers and return their squares using map function.
 let arr1 = [1,2,3,4,5,6];
let square = arr1.map(num => num * num);
console.log(square);