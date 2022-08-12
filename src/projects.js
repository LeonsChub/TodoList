import { createTodo } from "./todoItem";

const createProject = (str)=>{
    let todos = [];
    let name = str;

    const addTodo = (todo)=>{
        todos.push(todo);
    }
    const removeTodo = (index) =>{
        todos.splice(index,1);
    }
    const getName = ()=>{
        return name;
    }
    const returnAll = ()=>{
        return todos;
    }
    const todoAt =(index) =>{
        return todos[index];
    }
    const toString = ()=>{
        let str = "";
        todos.forEach(p => {
            str += p.getTitle();
            str += ", ";
        });

        return str;
    }

    return{addTodo,removeTodo,toString,getName,returnAll,todoAt}
}

const projectsManager = ()=>{
    let projects = [];

    const addProj = (proj)=>{
        projects.push(proj);
    }

    const rmProj = (name) =>{
        for (let index = 0; index < projects.length; index++) {
            const proj = array[index];

            if (proj.getName() === name) {
                projects.splice(index,1);
            }
        }
    }
    
    const getProjByIndex = (index)=>{
        const p = projects[index];
        return p; 
    }

    const getProjByName = (name)=>{
        for (let index = 0; index < projects.length; index++) {
            const p = projects[index];
            if (p.getName() === name) {
                return p; 
            }
        }
    }

    const returnAll = ()=>{
        return projects;
    }

    const length = ()=>{
        return projects.length;
    }

    const returnMain = ()=>{
        return projects[0];
    }

    return{addProj,rmProj,returnAll,returnMain,getProjByName,length,getProjByIndex}
}

export {createProject,projectsManager}