// ? Add Event Listener
let btn = document.querySelector('#my-button');
let behavior = event => console.log('Button clicked');
btn.addEventListener('click', behavior);

let printDate = event => console.log(new Date());
btn.addEventListener('click', printDate);

//? Remove Event Listener
btn.removeEventListener('click', behavior);