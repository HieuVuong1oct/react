import React, {useState} from 'react';
import TodoForm from '../src/components/TodoForm'
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(['Learn React', 'Build a Todo App', 'Deploy the App']);
  
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    
  }
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }
  return (
   <div >
    <h1>Todo App</h1>
    <TodoForm addTodo={addTodo}/>
    <TodoList todos={todos} deleteTodo={deleteTodo} />
  
   </div>
  );
}

export default App;
