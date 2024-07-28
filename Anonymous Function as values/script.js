//? Anonymous Function
let sum = function(num1 , num2) {
    return num1 + num2;
 }
let sumThreeNumber = function(num1, num2, num3, sumThreeNumbers) {
    let sum1 = sumTwoNumber(num1, num2);
    return num1 + num2 + num3;
 }
 console.log(sumThreeNumber(10, 20, 30, sum)); // 60