//Selectors    
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoFilter = document.querySelector('.filter');

// Event Listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
todoFilter.addEventListener('click', filterTodo);

// Function
function addTodo(event) {
    event.preventDefault();

    if(todoInput.value != '') {
        //Create div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        
        //Create Li 
        const todoLi = document.createElement('li');
        todoLi.innerText = todoInput.value;
        todoLi.classList.add('todo-item');
        todoDiv.appendChild(todoLi);

        //Check Button
        const checkBtn = document.createElement('button');
        checkBtn.classList.add('check');
        checkBtn.innerHTML = '<i class="fas fa-check"></i>';
        todoDiv.appendChild(checkBtn);

        //Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
        todoDiv.appendChild(deleteBtn);

        //Append to div
        todoList.appendChild(todoDiv);

        //Clear Input value
        todoInput.value = '';
    }
}

function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === 'delete') {
        const todo = item.parentElement;
        //animate delete
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }
    else if (item.classList[0] === 'check') {
        const todo = item.parentElement;
        todo.classList.toggle('unchecked');
    }

}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('unchecked')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "pending":
                if(!todo.classList.contains('unchecked')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}
