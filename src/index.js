import {createTodo} from "./todoItem.js" 
import { createProject } from "./projects.js";
import { loadMainAssests, loadTodo,openForm ,closeForm, loadProject} from "./load.js";
import css from "./style.css"

loadMainAssests();

let form = document.querySelector(".form-container");
let proj = createProject("general");

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

