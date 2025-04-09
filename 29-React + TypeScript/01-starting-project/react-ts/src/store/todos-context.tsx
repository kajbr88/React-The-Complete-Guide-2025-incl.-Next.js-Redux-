import React, {useState} from "react";
import Todo from '../models/todo';

type TodosContextObj = {items: Todo[]; addTodo: (text: string) => void; removeTodo: (id: string) => void;}

export const TodosContext = React.createContext<TodosContextObj>({//to define the shape of the context.
    items: [],
    addTodo: (text: string) => { },
    removeTodo: (id: string) => {},
});

 interface TodosContextProviderProps {
        children: React.ReactNode;
    }

const TodosContextProvider: React.FC<TodosContextProviderProps> = (props) => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const adddTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos((prevTodos) => {//use lambdas for using previous values.
            return prevTodos.concat(newTodo);//concat method creates a new array adding the newTodo.
        })
    };

    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {//use lambdas for using previous values.
            return prevTodos.filter((todo) => todo.id !== todoId);//keep all the todos where the id do not match.
        })
    };

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: adddTodoHandler,
        removeTodo: removeTodoHandler
    };

    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
}

export default TodosContextProvider;
