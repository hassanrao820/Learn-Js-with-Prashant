// *Ternary Operator:
let age = 17;
let result = age >= 18? "Adult" : "Child";
console.log(result);

// Guard Operator
let ageValue = 21;
let finalAge = ageValue || 18;
console.log(ageValue);  // Ans is 21
console.log(finalAge);  // Ans is 21

let Agevalue;
let Finalage = Agevalue || 18;
console.log(Agevalue);  // Ans is undefined
console.log(Finalage);  // Ans is 18

// Default Operator 
let value;	
let finalValue = value ?? 18;
console.log(value);  // Ans is undefined
console.log(finalValue);  // Ans is 21

// !Ex Q: Get discount on Metro ticket.?
let displayAge = prompt('What is your age');
let finalDiscount;

if (displayAge <= 5) {
    finalDiscount = 100; //? 100% discount for ages 5 and under
} else if (displayAge >= 65) {
    finalDiscount = 50; //? 50% discount for ages 65 and older
} else if(displayAge <= 15) {
    finalDiscount = 80; //? 90% discount for under 12 age
} else {
    finalDiscount = 0; //? No discount for other cases
}

console.log(`Your Discount is ${finalDiscount}%`);

