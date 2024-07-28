let arr = [1,2,3,4,5,6,7,8,9,10];
let odd = arr.filter((num, index) => {
    if (num % 2 === 1) {
        return true;
    }else {
        return false;
    }
});
console.log(odd);

// 2nd way
let arr2 = [1,2,3,4,5,6,7,8,9,10];
let odd2 = arr2.filter((num, index) => {
    return num % 2 === 1;
});
console.log(odd2);

// 3rd way
let arr3 = [1,2,3,4,5,6,7,8,9,10];
let odd3 = arr3.filter((num, index) => num % 2 === 1);
console.log(odd3);