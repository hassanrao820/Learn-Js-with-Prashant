let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function search(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            console.log(`Element found at ${i}`);
            return;
        }
    }
    console.log("Element not found");
}
search(arr, 6)
search(arr, 11)

let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(num =>  {
    if (num === 6) {
        return;
    }
    console.log(`Element found ${num}`);
})
