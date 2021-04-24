export default class Model{
    constructor(){
        this.view = null; 
        this.todos = JSON.parse(localStorage.getItem("todos"));
        if(!this.todos || this.todos.length < 1){
            this.todos = [
                {
                    id : 0, 
                    title: "Use this awesome To do List", 
                    description: "Organize with the power of a To do list", 
                    completed:false, 
                }
            ]
            this.currentId = 1;
        }
        else{
            this.currentId = this.todos[this.todos.length - 1].id + 1; 
        }
        
    }

    setView(view){
        this.view = view; 
    }

    getTodos(){
        const todos = []; 
        for(const todo of this.todos){
            todos.push({...todo});
        }
        return todos;
    }

    save(){
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    toggleCompleted(id){
        const index = this.findTodo(id); 
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        this.save();
    }
    editTodo(id,values){
        const index = this.findTodo(id); 
        Object.assign(this.todos[index], values);
        this.save();
    }
    findTodo(id){
        return this.todos.findIndex((todo) => todo.id === id); 
    }
    addTodo(title, description){
        const todo = {
            id : this.currentId++,
            title : title, 
            description: description, 
            completed: false
        }
        this.todos.push(todo);
        console.log(this.todos); 
        this.save(); 

        return Object.assign({}, todo);
    }
    removeTodo(id){
        const index = this.findTodo(id); 
        this.todos.splice(index, 1);
        this.save();
    }
}