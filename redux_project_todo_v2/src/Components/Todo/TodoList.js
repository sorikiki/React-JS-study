import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const ListContainer = styled.div`
    text-align: center;
    width: 33%;
    `

const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 10px;
    `
const TodoItem = ({ isLoggedIn, todo, onToggle, onRemove }) => {
    return (
        <ListItem>
            <div>
                <input 
                    type="checkbox"
                    onClick={() => isLoggedIn ? onToggle(todo.id) : alert('You are not a member!')}
                    checked={todo.done}
                    readOnly={true}
                />
                <span style={{ textDecoration: todo.done ? 'line-through' : 'none '}}>
                    {todo.text}
                </span>
            </div>
            <Button type='dashed' onClick={() => isLoggedIn ? onRemove(todo.id) : alert('You are not a member!')}>X</Button>
        </ListItem>
    )
}

const TodoList = ({
    isLoggedIn,
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove
}) => {
    const onSubmit = e => {
        e.preventDefault();
        if(isLoggedIn) {
            onInsert(input);
            return onChangeInput('');
        } else return alert ('You are not a member!');
    }

    const onChange = e => isLoggedIn ? onChangeInput(e.target.value) : alert('You are not a member!');

    return (
        <ListContainer>
            <h2>Todo List</h2>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange} />
                <button type="submit">add</button>
            </form>
            <div>
                {todos.map(todo => (
                    <TodoItem
                        isLoggedIn={isLoggedIn}
                        todo ={todo}
                        key={todo.id}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        </ListContainer>
    )
}

export default TodoList;