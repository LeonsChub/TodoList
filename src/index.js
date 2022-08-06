import {createTodo} from "./todoItem.js" 
import { loadMainAssests, loadTodo,openForm ,closeForm} from "./load.js";
import css from "./style.css"

let todo = createTodo("Feed jimmy","jimmy the dog will die if I dont feed him :( Lol","25/04/2022",3);
console.log(todo.isDone());
loadMainAssests();

document.querySelector("div.add").addEventListener("click", ()=>{
    openForm();
});

document.querySelector("img.close").addEventListener("click", ()=>{
    closeForm();
});

document.querySelector("button#submit").addEventListener("click", ()=>{
    closeForm();
});


loadTodo(todo);


