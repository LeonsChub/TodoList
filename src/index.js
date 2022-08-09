import {createTodo} from "./todoItem.js" 
import { createProject } from "./projects.js";
import { loadMainAssests,openForm ,closeForm, loadProject,loadExpandWindow} from "./load.js";
import css from "./style.css"

loadMainAssests();

let form = document.querySelector(".form-container");
let main = document.querySelector(".main-content");
let proj = createProject("general");

let todo = createTodo("feed jimmy","feed Jimmy my lovable dog","23/12/12",1);
proj.addTodo(todo);

todo = createTodo("feed jimmy","feed Jimmy my lovable dog1","23/12/12",1);
proj.addTodo(todo);

todo = createTodo("feed jimmy","feed Jimmy my lovable dog2","23/12/12",2);
proj.addTodo(todo);

todo = createTodo("feed jimmy","feed Jimmy my lovable dog3","23/12/12",3);
proj.addTodo(todo);

todo = createTodo("feed jimmy","feed Jimmy my lovable dog4","23/12/12",1);
proj.addTodo(todo);

todo = createTodo("feed jimmy","feed Jimmy my lovable dog5","23/12/12",1);
proj.addTodo(todo);

todo = createTodo("feed jimmy","feed Jimmy my lovable dog6","23/12/12",1);
proj.addTodo(todo);


loadProject(proj);