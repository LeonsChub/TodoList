import {createTodo} from "./todoItem.js" 
import { loadMainAssests, loadTodo } from "./load.js";
import css from "./style.css"

let todo = createTodo("Feed jimmy","jimmy the dog will die if I dont feed him :( Lol","25/04/2022",3);

loadMainAssests();

loadTodo(todo);
loadTodo(todo);
loadTodo(todo);
loadTodo(todo);
loadTodo(todo);

