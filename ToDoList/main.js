

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const items = document.getElementById("items")
        for (let item of data) {
          items.innerHTML += item.completed ? `<p><s> ${item.id} ${item.title} </s></p>` :`<p> ${item.id} ${item.title} </p>`;
        }
    })