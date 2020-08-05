import React from 'react';
import styled from 'styled-components';
import TodoCreate from './TodoCreate';
import TodoList from './TodoList';

const ToDoContainer = styled.div`
    width: 33%;
    margin-left: 10px;
    h2 {
        text-align: center;
        width: 100%;
    }
    `
const Todo = () => {
    return (
        <ToDoContainer>
            <h2>ToDo List</h2>
            <TodoCreate />
            <TodoList />
        </ToDoContainer>
    )
}

export default Todo;