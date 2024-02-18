
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");


function addItem() {
    if (todoInput.value === '') {
        alert("Mr Bob , To create a task, you need to name it!");
    } else {
        const li = document.createElement('li');
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                li.classList.add("completed");
            } else {
                li.classList.remove("completed");
            }
        });

        const label = document.createElement("label");
        label.textContent = todoInput.value; 
        const deleteButton = document.createElement("button"); 
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() { 
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        todoInput.value = '';
    }
}