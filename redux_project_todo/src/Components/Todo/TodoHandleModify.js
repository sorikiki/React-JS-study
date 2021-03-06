import React from 'react';
import { IoIosCreate } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { modify_todos } from '../../reducers/todos';

const TodoHandleModify = ({id}) => {
	const dispatch = useDispatch();
	const login = useSelector(state => state.user.login);

    const onModifyTodo = () => {
		login?
		dispatch(modify_todos(id)):
		alert('Access is not available unless you are a member.');
	}

	return <IoIosCreate onClick={onModifyTodo}/>;
};

export default TodoHandleModify;
