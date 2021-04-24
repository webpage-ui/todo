document.addEventListener("DOMContentLoaded", function(){
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const button = document.getElementById("add");
    const alert = document.getElementById("alert");
    const table = document.getElementById("table");
    let id = 1;

    function removeTodo(id){
        console.log(id);
        document.getElementById(id).remove();
    }
    function addTodo(){
        if(title.value == "" || description.value === ""){
            alert.classList.remove("d-none");
            alert.innerText = "Title and description are requiered to do a task";
            return;
        }
        
        alert.classList.add("d-none");
        const row = table.insertRow();
        row.setAttribute("id", id++);
        row.innerHTML = `
            <td>${title.value}</td>
            <td>${description.value}</td>
            <td class="text-center">
                <input type="checkbox">
              </td>
              <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
                </button>
                
            </td>
        `; 

        const removeButton = document.createElement("button");
        removeButton.classList.add("btn", "btn-danger", "mb-1", "ml-1"); 
        removeButton.innerHTML = '<i class="fa fa-trash"></i>';
        removeButton.onclick = function(e){
            removeTodo(row.getAttribute("id"));
        }
        row.children[3].appendChild(removeButton);
        
    }

    button.onclick = addTodo;
})



