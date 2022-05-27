//data
let todos=[]

//elelment 
const todolistContent = document.querySelector('.todolist__content')

//init
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => {
        todos = data
        renderTodoList(todos)
    })

function renderTodoList(todos){
    const todolistTmp = generateTodoListTmp(todos)
    render(todolistTmp, todolistContent)
}

//templates
function generateTodoListTmp(todos) {
    let res = todos.map((todo) => {
        return generateTodoTmp(todo)
    }).join('')
    return res
}

function generateTodoTmp(todo) {
    return `<li class="todolist__conotent_item">
            <span class="content-item_title">
                ${todo.title}
            </span>
            <div class="content-item__actions">
                <button>Edit</button>
                <button class="btn-remove" id="todo-${todo.id}">X</button>
            </div>
            </li>`
}

//render
function render(template, element) {
    element.innerHTML=template
}