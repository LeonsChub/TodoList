import {createTodo} from "./todoItem.js" 
import { createProject,projectsManager } from "./projects.js";
import { loadMainAssests,openForm ,closeForm, loadProject,loadExpandWindow, reloadProjectList} from "./load.js";
import css from "./style.css"

let projects = projectsManager();
let mainproj = createProject("General");
projects.addProj(mainproj);

mainproj = createProject("homework");
projects.addProj(mainproj);

mainproj = createProject("Chores");
projects.addProj(mainproj);

mainproj = createProject("Bills");
projects.addProj(mainproj);

/*let secondProj = createProject("Spring cleaning");
let thirdProj = createProject("House renovation");
projects.addProj(mainproj);
projects.addProj(secondProj);
projects.addProj(thirdProj);

let todo1 = createTodo("buy milk","Need to get cow milk","tomorrow SIKE",3);
let todo2 = createTodo("clean shed","clean shed in the yad","tomorrow SIKE",1);
let todo3 = createTodo("buy hammer ","buy tools from home depo","tomorrow SIKE",2);
let todo4 = createTodo("buy nails","buy tools from home depo","tomorrow SIKE",2);

mainproj.addTodo(todo1);
mainproj.addTodo(todo2);
mainproj.addTodo(todo3);
mainproj.addTodo(todo4);

secondProj.addTodo(todo2);

thirdProj.addTodo(todo3);
thirdProj.addTodo(todo4);*/

loadMainAssests(projects);
reloadProjectList(projects);

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
    
            loadProject(projects,mainproj);
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
        reloadProjectList(projects);
    }
});

loadProject(projects,projects.returnMain());