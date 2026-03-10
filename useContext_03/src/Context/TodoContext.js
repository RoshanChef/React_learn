import { createContext, useContext } from "react";

const TodoContext = createContext({
    curData: [],
    setter: ()=>{ },
    edit: {},
    set_edit: function () { },
});

const TodoProvider = TodoContext.Provider;

function useTodo() {
    return useContext(TodoContext);
}

export { TodoContext, TodoProvider, useTodo };