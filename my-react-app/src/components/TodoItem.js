import React from "react";

function TodoItem({todo, index, deleteTodo }){
    return(
        <li>
            {todo}
            <button onClick={() => deleteTodo(index)}>
                Delete
            </button>
        </li>
    );
}

export default TodoItem;