//! Break

let ary = [1, 2, 5, 6, 8, 10, 55 , 56, 7];
for (let i = 0 ; i < ary.length ; i++) {
    if (ary[i] === 5) {
        console.log(`5 found at index ${i}`);
        break;
    }
    console.log("ary[i]");
}

//! Continue

for (let i = 0 ; i <= 30 ; i++) {
    if (i % 2== 0) {
        continue;
    }
    console.log(i);
}