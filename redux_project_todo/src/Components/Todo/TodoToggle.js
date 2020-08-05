import React from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { toggle_todos } from '../../reducers/todos';

const TodoToggle = ({id}) => {
    const dispatch = useDispatch();

    const onToggleTodo = () => {
       dispatch(toggle_todos({ id }))
    }
    
    return (
        <IoIosCheckmarkCircleOutline onClick={onToggleTodo} />
    )
}

export default TodoToggle;
