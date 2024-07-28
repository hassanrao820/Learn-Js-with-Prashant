let todoList = [];
        
displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    
    todoList.push({ item: todoItem, dueDate: todoDate });
    
    inputElement.value = '';
    dateElement.value = '';
    
    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('#todo-container');
    containerElement.innerHTML = ''; // Clear existing content
    
    todoList.forEach((todo, index) => {
        let { item, dueDate } = todo;
        let todoItemElement = document.createElement('div');
        todoItemElement.classList.add('todo-item');
        todoItemElement.innerHTML = `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button onclick="deleteTodoItem(${index})">Delete</button>
        `;
        containerElement.appendChild(todoItemElement);
    });
}

function deleteTodoItem(index) {
    todoList.splice(index, 1);
    displayItems();
}