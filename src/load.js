import {copy, createTodo} from "./todoItem";
import { createProject } from "./projects";

if(!!document.querySelector("#content") === false){
    var anchorDiv = document.createElement("div");
    anchorDiv.id = "content";
    document.querySelector("body").appendChild(anchorDiv);
}
else{
    var anchorDiv = document.querySelector("#content"); 
}

function loadMainAssests(projects){

    let logoWrap = document.createElement("header");
    logoWrap.classList.add("logo-wrap");

    let logoImg = document.createElement("img");
    logoImg.setAttribute("width","48px");

    logoImg.setAttribute("src","../src/images/Logo.svg");
    let logo = document.createElement('h1');
    logo.classList.add('logo');
    logo.innerHTML = '<img width="40px" src="../src/images/Logo.svg" alt=""> To Do List';

    logoWrap.appendChild(logo);
    anchorDiv.appendChild(logoWrap);

    let sidebar = document.createElement('div');
    sidebar.classList.add("sidebar");

    let sidebarList = document.createElement('ul');

    let listElem = document.createElement("li");
    let btnHome = document.createElement("button");
    btnHome.textContent = "home";
    listElem.appendChild(btnHome);
    
    sidebarList.appendChild(listElem);

    listElem = document.createElement("li");
    listElem.textContent = "Projects";
    sidebarList.appendChild(listElem);

    listElem = document.createElement("li");

    let addProjectWrap = document.createElement("div");
    addProjectWrap.id = "add-project";
    addProjectWrap.style.display = "none";
    
    let addProjInput = document.createElement("input");
    addProjInput.id = "project-add-name"
    addProjInput.setAttribute("maxlength","15");
    let btnDiv = document.createElement("div");
    btnDiv.classList.add("btn-div");

    let errorMsg = document.createElement("p");
    errorMsg.classList.add("error");
    errorMsg.style.display = "none";
    errorMsg.textContent = "Invalid value";

    let btn = document.createElement("button");
    btn.id = "submit-proj";
    btn.textContent = "ADD";
    btn.addEventListener("click",()=>{
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
    
            document.querySelector("#myForm").remove();
            loadForm(projects);
        }
    });
    btnDiv.appendChild(btn);

    btn = document.createElement("button");
    btn.id = "cancel-proj";
    btn.textContent = "X"
    btn.addEventListener("click",()=>{
        addProjInput.value = "";
        addProjectWrap.style.display = "none";
        errorMsg.style.display= "none";
    });
    btnDiv.appendChild(btn);

    addProjectWrap.appendChild(addProjInput);
    addProjectWrap.appendChild(errorMsg);
    addProjectWrap.appendChild(btnDiv);
    
    listElem.appendChild(addProjectWrap);
    sidebarList.appendChild(listElem);

    listElem = document.createElement("li");
    let btnAddProject = document.createElement("button");
    btnAddProject.textContent = "+ Add Project";

    btnAddProject.addEventListener("click",()=>{
        addProjectWrap.style.display = "block";
    });

    listElem.appendChild(btnAddProject);
    sidebarList.appendChild(listElem);

    listElem = document.createElement("li");
    let projectList = document.createElement("ul");
    projectList.id = "project-list";
    listElem.appendChild(projectList);
    sidebarList.appendChild(listElem);

    let addTodo = document.createElement("div");
    addTodo.classList.add("add");
    addTodo.textContent = "+";

    addTodo.addEventListener("click", ()=>{
        openForm();
    });

    sidebar.appendChild(sidebarList);
    sidebar.appendChild(addTodo);
    anchorDiv.appendChild(sidebar);

    let main = document.createElement("div");
    main.classList.add("main-content");
    anchorDiv.appendChild(main);

    loadForm(projects);
}

function loadTodo(todo,index){
    let content = document.querySelector(".main-content");

    let toDoDiv = document.createElement("div");
    toDoDiv.setAttribute("priority",todo.getPriority());
    toDoDiv.setAttribute("index",index);
    toDoDiv.classList.add("todo");

    let checkBox = document.createElement("div");
    checkBox.classList.add("complete");
    
    let title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = todo.getTitle();
    if (todo.isDone()) {
        title.classList.add("checked");
        checkBox.classList.add("checked");
    }

    let date = document.createElement("h3");
    date.classList.add("date");
    date.textContent = todo.getDueDate();

    let expand = document.createElement("img");
    expand.classList.add("expand");
    expand.setAttribute("width","24px");
    expand.setAttribute("src","../src/images/expand.svg");

    expand.addEventListener("click",()=>{
        loadExpandWindow(todo);
    });

    let edit = document.createElement("img");
    edit.classList.add("edit");
    edit.setAttribute("width","24px");
    edit.setAttribute("src","../src/images/edit.svg");

    

    let trash = document.createElement("img");
    trash.classList.add("trash");
    trash.setAttribute("width","24px");
    trash.setAttribute("src","../src/images/trash.svg");


    toDoDiv.append(checkBox);
    toDoDiv.append(title);
    toDoDiv.append(date);
    toDoDiv.append(expand);
    toDoDiv.append(edit);
    toDoDiv.append(trash);

    content.appendChild(toDoDiv);
}

function loadForm(projects){

    let formWrap = document.createElement("div");
    formWrap.id = "myForm";

    let formTitle = document.createElement("div");
    formTitle.classList.add("title");
    formWrap.classList.add("popup");

    let name = document.createElement("h3");
    name.textContent = "Add a to-do";
    formTitle.appendChild(name);

    let xBtn = document.createElement("img");
    xBtn.classList.add("close");
    xBtn.setAttribute("src","../src/images/close.svg");
    formTitle.appendChild(xBtn);

    formWrap.appendChild(formTitle);

    let form = document.createElement("form");
    form.classList.add("form-container");
    form.setAttribute('novalidate', true);
    formWrap.appendChild(form);

    let list = document.createElement("ul");
    form.appendChild(list);

    let listItem = document.createElement("li");
    listItem.classList.add("text-field");
    let titleInput = document.createElement("input");
    titleInput.id = "new-title";
    titleInput.setAttribute("type","text");
    titleInput.setAttribute("name","create-form-title");
    titleInput.setAttribute("maxlength","30");
    titleInput.setAttribute("placeholder","Title: (example: Walk the dog)");
    listItem.appendChild(titleInput);
    list.appendChild(listItem);

    let descriptionInput = document.createElement("textarea");
    descriptionInput.id = "new-description";
    descriptionInput.setAttribute("placeholder","Description...");
    descriptionInput.setAttribute("name","create-form-description");
    listItem.appendChild(descriptionInput);
    list.appendChild(listItem);

    listItem = document.createElement("li");
    listItem.classList.add("picker-field");

    let dateLabel = document.createElement("label");
    dateLabel.setAttribute("for","create-form-date");
    dateLabel.textContent = "Due Date:";
    let dateInput = document.createElement("input");
    dateInput.setAttribute("name","create-form-date");
    dateInput.id = "new-date";
    dateInput.setAttribute("type","date");

    let simpleDiv = document.createElement("div");

    simpleDiv.appendChild(dateLabel);
    simpleDiv.appendChild(dateInput);

    listItem.appendChild(simpleDiv);
    
    let priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for","create-form-priority");
    priorityLabel.textContent = "priority:";
    let priorityInput = document.createElement("select");
    priorityInput.setAttribute("name","create-form-priority");
    priorityInput.id = "new-priority";

    let priorityOption = document.createElement("option");
    priorityOption.textContent = "low";
    priorityOption.setAttribute("value","1");
    priorityInput.appendChild(priorityOption);

    priorityOption = document.createElement("option");
    priorityOption.textContent = "medium";
    priorityOption.setAttribute("value","2");
    priorityInput.appendChild(priorityOption);

    priorityOption = document.createElement("option");
    priorityOption.textContent = "high";
    priorityOption.setAttribute("value","3");
    priorityInput.appendChild(priorityOption);

    simpleDiv = document.createElement("div");

    simpleDiv.appendChild(priorityLabel);
    simpleDiv.appendChild(priorityInput);

    listItem.appendChild(simpleDiv);

    list.appendChild(listItem);

    let projectLabel = document.createElement("label");
    projectLabel.setAttribute("for","create-form-poject");
    projectLabel.textContent = "Project:";
    let projectInput = document.createElement("select");
    projectInput.setAttribute("name","create-form-project");
    projectInput.id = "new-poject";


    for (let index = 0; index < projects.length(); index++) {
        let Option = document.createElement("option");
        Option.textContent = projects.getProjByIndex(index).getName();
        Option.setAttribute("value",`${projects.getProjByIndex(index).getName()}`);
        projectInput.appendChild(Option);
        
    }

    simpleDiv = document.createElement("div");
    
    simpleDiv.appendChild(projectLabel);
    simpleDiv.appendChild(projectInput);

    listItem.appendChild(simpleDiv);

    list.appendChild(listItem);

    let submitBtn = document.createElement("button");
    submitBtn.id = "submit";
    submitBtn.textContent = "Add Task";

    submitBtn.addEventListener("click", ()=>{
        let form = document.querySelector(".form-container");
        
        if(form["create-form-title"].value === "" || form["create-form-description"].value === "" || form["create-form-date"].value === ""){
            alert("Please fill out Title Description and Due date.");
        }
        else{
            let todo = createTodo(form["create-form-title"].value,
                       form["create-form-description"].value,
                       form["create-form-date"].value,
                       form["create-form-priority"].value);

            if(form["create-form-project"].value !== "General"){
                let projName = `${form["create-form-project"].value}`;
                let proj = projects.getProjByName(projName);
                proj.addTodo(todo);
            }
            projects.returnMain().addTodo(todo);
            loadProject(projects,projects.returnMain());
        }
    
        closeForm();
    
        form["create-form-title"].value = "";
        form["create-form-description"].value = "";
        form["create-form-date"].value = "";
        form["create-form-priority"].value = "1";
        form["create-form-project"].value = "General";
    });

    formWrap.appendChild(submitBtn);

    formWrap.style.display = "none";
    
    anchorDiv.appendChild(formWrap);
    
    xBtn.addEventListener("click", ()=>{
        closeForm();
    });
    

}

function openForm(){
    document.querySelector("#myForm").style.display = "block";
}

function closeForm(){
    document.querySelector("#myForm").style.display = "none";
}

function closeExpand(){
    document.querySelector("#expandWindow").remove();
}

function loadProject(projects,proj){
    let content = document.querySelector(".main-content");
    content.innerHTML = "";
    let subProjectArray = proj.returnAll();
    let mainProjArray = projects.returnMain().returnAll();
    for (let index = 0; index < mainProjArray.length; index++) {
        const p = mainProjArray[index];
        if (subProjectArray.includes(p)) {
            loadTodo(p,index);
        }
        
    }
    checkEventAdder(projects,proj);
    trashEventAdder(projects,proj);
    
}

const trashEventAdder = (projects,proj) =>{
    let trashBtns = document.querySelectorAll(".trash");
    trashBtns.forEach(element => {
        element.addEventListener("click", ()=>{

            let i = element.closest(".todo").getAttribute("index");
            projects.returnMain().removeTodo(i);
            loadProject(projects,proj);
            
        });
    });
}

const checkEventAdder = (projects,proj) =>{
    console.log("adding checklistener");
    let trashBtns = document.querySelectorAll(".complete");
    trashBtns.forEach(element => {
        element.addEventListener("click", ()=>{
            let domTitle = element.closest(".todo").childNodes[1];
            let i = element.closest(".todo").getAttribute("index");
            projects.returnMain().todoAt(i).switchDone();

            if (element.classList.contains("checked")) {
                domTitle.classList.remove("checked");
                element.classList.remove("checked");
            } else {
                element.classList.add("checked");
                domTitle.classList.add("checked");
            }
        });
    });
}

const loadExpandWindow = (todo) =>{
    let expandWrap = document.createElement("div");
    expandWrap.id = "expandWindow";

    let formTitle = document.createElement("div");
    formTitle.classList.add("title");
    expandWrap.classList.add("popup");

    let name = document.createElement("h3");
    name.textContent = todo.getTitle();
    formTitle.appendChild(name);

    let xBtn = document.createElement("img");
    xBtn.classList.add("close");
    xBtn.setAttribute("src","../src/images/close.svg");
    formTitle.appendChild(xBtn);

    xBtn.addEventListener("click",()=>{
        closeExpand()
    });


    let descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("form-container");

    let description = document.createElement("p");
    description.id = "expand-description";
    description.textContent = todo.getDescription();

    descriptionContainer.appendChild(description);

    expandWrap.appendChild(formTitle);
    expandWrap.appendChild(descriptionContainer);
    
    anchorDiv.appendChild(expandWrap);
}

const reloadProjectList = (projects) =>{
    let projectList = document.querySelector("#project-list");
    projectList.innerHTML = "";
    projects.returnAll().forEach(element => {
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.textContent = element.getName();
        li.append(button);
        projectList.append(li);

        button.addEventListener("click",()=>{
            loadProject(projects,projects.getProjByName(button.textContent));
        });
    });
}

export {loadMainAssests, loadTodo, openForm, closeForm, loadProject, trashEventAdder,checkEventAdder ,loadExpandWindow,reloadProjectList}  