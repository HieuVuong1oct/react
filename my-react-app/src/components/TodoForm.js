import React ,{ useState } from 'react';
import { MDBInput} from 'mdb-react-ui-kit';
import '../css/btn.css';
function TodoForm({addTodo}){
    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim()){
            addTodo(input);
            setInput('');

        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <MDBInput
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new todo"
            />
            
            <button color="light" className="col-3 border border-secondary calculator-button " type="submit">Add todo</button>
        </form>
    );
}

export default TodoForm;