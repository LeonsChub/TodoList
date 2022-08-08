import {createTodo} from "./todoItem.js" 
import { createProject } from "./projects.js";
import { loadMainAssests, loadTodo,openForm ,closeForm, loadProject, trashEventAdder,checkEventAdder} from "./load.js";
import css from "./style.css"

loadMainAssests();

let form = document.querySelector(".form-container");
let main = document.querySelector(".main-content");

let proj = createProject("general");

let dodo = createTodo("SSS1","SSS","SSS",1);
proj.addTodo(dodo);

dodo = createTodo("SSS2","SSS","SSS",2);
proj.addTodo(dodo);

dodo = createTodo("SSS3","SSS","SSS",3);
proj.addTodo(dodo);

loadProject(proj);

document.querySelector("div.add").addEventListener("click", ()=>{
    openForm();
});

document.querySelector("img.close").addEventListener("click", ()=>{
    closeForm();
});

document.querySelector("button#submit").addEventListener("click", ()=>{

    if(form["create-form-title"].value === "" || form["create-form-description"].value === "" || form["create-form-date"].value === ""){
        alert("Please fill out Title Description and Due date.");
    }
    else{
        let todo = createTodo(form["create-form-title"].value,
                   form["create-form-description"].value,
                   form["create-form-date"].value,
                   form["create-form-priority"].value);
        
        proj.addTodo(todo);
        console.log(proj.toString());

        loadProject(proj);
    }

    closeForm();

    form["create-form-title"].value = "";
    form["create-form-description"].value = "";
    form["create-form-date"].value = "";
    form["create-form-priority"].value = "1";
});