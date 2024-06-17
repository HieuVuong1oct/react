import React from "react";
import TodoItem from "./TodoItem";

function TodoList({todos, deleteTodo}){
    return(
        <ul>
            {todos.map((todo,index) => (
                <TodoItem key={index} todo={todo} index={index} deleteTodo={deleteTodo}> </TodoItem>
            ))}
        </ul>
    );
}

export default TodoList;