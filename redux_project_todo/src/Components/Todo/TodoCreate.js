import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { insert_todos, modify_todos } from '../../reducers/todos';


const CreateContainer = styled.div`
	display: flex;
	`;

const TodoCreate = () => {
    const [id, setId] = useState(2);
    const [input, setInput] = useState('');

    const dispatch = useDispatch();
    
    const todos = useSelector(state => state.todos);

    const todosModified = todos.map(todo => todo.modified);

    const onChangeInput = e => {
        setInput(e.target.value);
    }
    
    const onChangeTodo = () => {
        todosModified.includes(true) ? onModifyTodo() : onInsertTodo();
    }

    const onInsertTodo = () => {
        dispatch(insert_todos(id, input));
        setId(id+1);
        setInput('');
    }

    const onModifyTodo = () => {
        dispatch(modify_todos(input));
        setInput('');
    }

    const btnName = todosModified.includes(true) ? 'Modify' : 'Add';
    

	return (
		<CreateContainer>
            <input 
                value={input}
                onChange={onChangeInput} />
			<button onClick={onChangeTodo}>{btnName}</button>
		</CreateContainer>
	)
};

export default TodoCreate;
