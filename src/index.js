import {createTodo} from "./todoItem.js" 
import { createProject,projectsManager } from "./projects.js";
import { loadMainAssests,openForm ,closeForm, loadProject,loadExpandWindow, reloadProjectList} from "./load.js";
import css from "./style.css"

let projects = projectsManager();
let mainproj = createProject("general");
projects.addProj(mainproj);

loadMainAssests();
reloadProjectList(projects.returnAll());

let form = document.querySelector(".form-container");
let main = document.querySelector(".main-content");



document.querySelector("#submit").addEventListener("click", ()=>{
    
        if(form["create-form-title"].value === "" || form["create-form-description"].value === "" || form["create-form-date"].value === ""){
            alert("Please fill out Title Description and Due date.");
        }
        else{
            let todo = createTodo(form["create-form-title"].value,
                       form["create-form-description"].value,
                       form["create-form-date"].value,
                       form["create-form-priority"].value);
            
            mainproj.addTodo(todo);
    
            loadProject(mainproj);
        }
    
        closeForm();
    
        form["create-form-title"].value = "";
        form["create-form-description"].value = "";
        form["create-form-date"].value = "";
        form["create-form-priority"].value = "1";
});

document.querySelector("#submit-proj").addEventListener("click",()=>{
    let val = document.querySelector("#project-add-name").value;
    if (val.length < 2) {
        document.querySelector("#add-project").childNodes[1].style.display = "block";
    }
    else{
        document.querySelector("#project-add-name").value = "";
        document.querySelector("#add-project").childNodes[1].style.display = "none";
        document.querySelector("#add-project").style.display = "none";

        let projToadd = createProject(val);
        projects.addProj(projToadd);
        reloadProjectList(projects.returnAll());
    }
});

loadProject(projects.returnMain());