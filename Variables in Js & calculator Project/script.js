// Q: What are variables?
// !Ans: Variables are like containers used for storing data values.

// 3 ways to declare variables in js.

// !1st way ( Var )

// var - Global (Kahi bhi access kr sakty hain.)
// Var ko Re-assign bhi kr sakty hain.

// !2nd way ( Let )

// let - Local (Sirf khud ka block ma access kr skty hain.)	
// let ko Re-assign bhi kr sakty hain.

// !3rd way ( const )

// const - local (Sirf khud ka block ma access kr skty hain.)
// But const ko ham Re-assign ni kr skty.


// *First small Bag Project.  

let bagPrice = (1000 - (10/100 * 1000)) - 200;
let jeansPrice = (1500 - (10/100 * 1500)) - 250;

let bagValue = Math.round((bagPrice + jeansPrice + 25 + 30) * 20/100);
let bagSummary = `Your Bag value is ${bagValue}`;
console.log(bagSummary);

// Updating Values

// 1: 
let noOfstudent = 517;
noOfstudent = noOfstudent  + 1;
console.log(noOfstudent);

// 2: 
 // +
let	money = 500;
money += 5;
console.log(money);

// -
let	money1 = 100;
money1 -= 5;
console.log(money1);

// *
let	money2 = 5;
money2 *= 5;
console.log(money2);

// / (Divide)
let	money3 = 500;
money3 /= 5;
console.log(money3);

// ++
let money4 = 1;
money4 ++;
console.log(money4);

// *Exercise Question:- Display Your OWn name on Screen with Js.

let myName = "Hassan Akhtar";
document.querySelector("#Hassan").innerText = myName;