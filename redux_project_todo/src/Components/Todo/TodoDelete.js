import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { delete_todos } from '../../reducers/todos';

const TodoDelete = ({id}) => {
    const dispatch = useDispatch();
    
    const onDeleteTodo = () => {
       dispatch(delete_todos({id}));
    }
    
    return (
        <IoIosCloseCircle onClick={onDeleteTodo} />
    )
}

export default TodoDelete;