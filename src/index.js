import {createTodo} from "./todoItem.js" 
import { createProject,projectsManager } from "./projects.js";
import { loadMainAssests,closeForm, loadProject, reloadProjectList,loadProjectSelector} from "./load.js";
import css from "./style.css"

let projects = projectsManager();
let mainproj = createProject("General");
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


loadProject(projects,projects.returnMain());