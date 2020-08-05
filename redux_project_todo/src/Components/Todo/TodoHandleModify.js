import React from 'react';
import { IoIosCreate } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { modify_todos } from '../../reducers/todos';

const TodoHandleModify = ({id}) => {
	const dispatch = useDispatch();

	const todos = useSelector(state => state.todos);

    const onModifyTodo = () => {
		dispatch(modify_todos(id));
	}

	return <IoIosCreate onClick={onModifyTodo}/>;
};

export default TodoHandleModify;
