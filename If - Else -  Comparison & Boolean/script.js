//* Q: What are booleans?
// Ans: Booleans are basic data type in Js. (They can be true or false.)

// !Comparison Operators
    
// 1: Equality
    //  == Check value equality
    console.log(1 == 1); // Result --> // true
    console.log(1 == '1'); // Result --> // true
    console.log(1 == 2); // Result --> // false
    console.log(1 == '2'); // Result --> // false
    //  === Check value and type equality
    console.log(1 === 1); // Result --> // true
    console.log(1 === '1'); // Result --> // false

// 2: Non-Equality
    //  != Check value inequality
        console.log(1 != 1); // Result --> // false
        console.log(1 != '1'); // Result --> // false
    // !== Check value and type inequality
        console.log(1 !== 1); // Result --> // false
        console.log(1 !== '1'); // Result --> // true

// 3: Relational
    //  > Greater than
        console.log(1 > 2); // Result --> // false
        console.log(2 > 1); // Result --> // true
    // < Less than
        console.log(1 < 2); // Result --> // true
        console.log(2 < 1); // Result --> // false
    // >= Greater than or equal to
        console.log(1 >= 2); // Result --> // false
        console.log(2 >= 1); // Result --> // true
    // <= Less than or equal to
        console.log(1 <= 2); // Result --> // true
        console.log(2 <= 1); // Result --> // false

// !If - Else Statement  
        let age = 15;
        if (age >= 17) {
            console.log("You are adult")
        } else if (age < 5) {
            console.log("You are a child")
        }
        else {
            console.log("You are not adult")
        }
        
