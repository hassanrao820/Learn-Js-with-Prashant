// ? unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// ? push() method adds one or more elements to the end of an array and returns the new length of the array.
let ary = [5,6];
ary.unshift(4);
console.log(ary);
ary.push(7);
console.log(ary)

// ?Slice() method returns the selected elements in an array, as a new array object.
let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr);
console.log(arr.slice(2,5));

//? Create a for loop that prints number from 1 to 10 in reverse order.
for(let i=10; i>=1; i-- ){
    console.log(i);
}

//? using continue only print +ve number from the array [1, 5, -9, 0, 12, 4, -18, -3];
let arr1 = [1, 5, -9, 0, 12, 4, -18, -3];
for(let i=0; i < arr1.length; i++){
    if(arr1[i] < 0){
        continue;
    }
    console.log(arr1[i]);
}

//? Using accumulator pattern concatenate all the strings in the given array. ["Hello", "World", "JavaScript", "ES6"]
let arr2 = ["Hello ", "World ", "JavaScript ", "ES6"];
let str = "";
for(let i=0; i < arr2.length; i++){
    str += arr2[i];
}
console.log(str);

// ? Create a copy of array using slice method.
let arr3 = [1,2,3,4,5,6,7,8,9,10];
let arr4 = arr3.slice();
console.log(arr4);

//? Create a method to return an element at a particular position in array
function getElement(arr9, position){
    return arr9[position - 1];
}
    let arr9 = [1,2,3,4,5,6,7,8,9,10];
    console.log(getElement(arr9, 9));
    
//? create a while loop that exit after counting 10 prime number
let i = 2;
let count = 0;
while(count < 10){
    let isPrime = true;
    for(let j = 2; j < i; j++){
        if(i % j == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(i);
        count++;
    }
    i++;
}