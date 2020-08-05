import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import TodoToggle from './TodoToggle';
import TodoHandleModify from './TodoHandleModify';
import TodoDelete from './TodoDelete';

const ListContainer = styled.ul`
	padding: 0;
`;
const ListItem = styled.li`
	display: flex;
`;
const ListContent = styled.div`
	width: 70%;
	text-decoration: ${({ checked }) => checked && 'line-through'};
`;

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const listArray = todos.map(todo => {
        return (
            <ListItem key={todo.id}>
			    <ListContent checked={todo.done}>{todo.text}</ListContent>
			    <div>
					<TodoToggle id={todo.id} />
					<TodoHandleModify id={todo.id} />
					<TodoDelete id={todo.id} />
				</div>
		    </ListItem>
        )
    })

	return <ListContainer>{listArray}</ListContainer>;
};

export default TodoList;
