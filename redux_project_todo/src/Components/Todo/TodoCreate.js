import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { insert_todos } from '../../reducers/todos';


const CreateContainer = styled.div`
	display: flex;
	`;

const TodoCreate = () => {
    const [input, setInput] = useState('');
    const [id, setId] = useState(1);
    
    const dispatch = useDispatch();

    const onChangeInput = e => {
        setInput(e.target.value);
    }

    const onInsertTodo = () => {
        setId(id+1);
        dispatch(insert_todos({ id, text: input, done: false, modified: false }));
    }
    
	return (
		<CreateContainer>
            <input 
                value={input}
                onChange={onChangeInput} />
			<button onClick={onInsertTodo}>Add</button>
		</CreateContainer>
	)
};

export default TodoCreate;
