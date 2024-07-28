// There are three Types of Logical Operators:-
// 1: AND Operator
    // (In AND Operator Both Condition must be True.)
        let ahmedAge = 25;
        if (ahmedAge >= 18 && ahmedAge <= 25) { // Ahmed can Drive.
                console.log("Ahmed can dive.");
        } else {
            console.log("Ahmed can't dive.");
        }
        let ahmadAge = 25;
        if (ahmedAge >= 18 && ahmadAge <= 22) { // Ahmed can't Drive.
                console.log("Ahmed can dive.");
        } else {
            console.log("Ahmed can't dive.");
        }


// 2: OR Operator
        // (In OR Operator At Least One Condition must be True.)
        let hassanAge = 25;
        if (hassanAge >= 18 || hassanAge <= 22) { // Hassan can drive.
            console.log('Hassan can drive')
        } else {
            console.log("Hassan can't drive")  
        }
        let hasanAge = 25;
        if (hasanAge >= 18 || hasanAge <= 25) { // Hassan can drive.
            console.log('Hassan can drive')
        } else {
            console.log("Hassan can't drive")   
        }
        let aliAge = 25;
        if (aliAge >= 27 || aliAge <= 18) { // Ali can't drive.
            console.log('ALi can drive')
        } else {
            console.log("Ali can't drive")
            
        }


// 3: NOT Operator

