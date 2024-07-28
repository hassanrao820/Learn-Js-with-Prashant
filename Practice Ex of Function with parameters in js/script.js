// Check a number is even or odd 
function checkNumber(){
    let num = prompt('Enter a number to check if it is even or odd: ')
    document.getElementById('checkNum').innerHTML = `The number ${num} is ${(num % 2 == 0) ? 'even' : 'odd'}`
    console.log(num);
}
checkNumber();

// Check larger of the two number

function checkLargest(){
    let num1 = prompt('Enter first number: ( Check which number is larger ). ')
    let num2 = prompt('Enter second number: ( Check which number is larger ). ')
    document.getElementById('largestNum').innerHTML = `The larger number is ${(num1 > num2 && num2 < num1) ? num1 : num2}`
    console.log(num1, num2);
}
checkLargest();

// convert celsius to fahrenheit

function convertCelsiusToFahrenheit(){
    let celsius = prompt('Enter temperature in Celsius: ')
    document.getElementById('fahrenheitTemp').innerHTML = `${celsius}°C is equal to ${(celsius * 9/5) + 32}°F`
    console.log(celsius);
}
convertCelsiusToFahrenheit();