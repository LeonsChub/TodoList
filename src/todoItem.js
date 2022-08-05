const createTodo = (title, description, due, priority)=>{
    const getTitle = ()=>{
        return title;
    };
    const getDescription = ()=>{
        return description;
    };
    const getDueDate = ()=>{
        return due;
    };
    const getPriority = ()=>{
        return priority;
    };
    const returnTodo = ()=>{
        return {title,description,due,priority};
    };
    const toString = ()=>{
        return `${priority} ${title}         ${due} \n ${description}`
    };

    return {getTitle, getDescription,getDueDate,getPriority,toString,returnTodo};
}

const copy = (ToDo)=>{
    return createTodo(ToDo.getTitle(),ToDo.getDescription(),ToDo.getDueDate(),ToDo.getPriority());
};
export {createTodo,copy};