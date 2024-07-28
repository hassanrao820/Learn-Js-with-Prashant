// DOM
console.log(document.location);  //For Location
console.log(document.title = 'DOM');  // For title change use document.title = 'New Title'
console.log(document.innerHTML = 'This is DOM');

// Query Selector

console.log(document.querySelector('#myDiv')); // Selecting by ID
console.log(document.querySelectorAll('.myClass')); // Selecting by class
console.log(document.querySelector('p')); // Selecting by tag name
console.log(document.querySelector('p:nth-child(2)')); // Selecting by nth-child

// Event Listener

const myButton = document.querySelector('#myButton');
myButton.addEventListener('click', () => {
  console.log('Button clicked');
});

// Form Validation

const myForm = document.querySelector('#myForm');
myForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;

  if (name === '' || email === '') {
    alert('Please fill in all fields');
    return;
  }

  console.log(`Name: ${name}, Email: ${email}`);
});

// DOM Manipulation

const myDiv = document.querySelector('#myDiv');
myDiv.innerHTML = '<h1>Hello World</h1>';