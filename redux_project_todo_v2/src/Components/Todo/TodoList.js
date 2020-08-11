import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
    text-align: center;
    width: 33%;
    `

const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 10px;
    `
const TodoItem = ({ todo, onToggle, onRemove }) => {
    return (
        <ListItem>
            <div>
                <input 
                    type="checkbox"
                    onClick={() => onToggle(todo.id)}
                    checked={todo.done}
                    readOnly={true}
                />
                <span style={{ textDecoration: todo.done ? 'line-through' : 'none '}}>
                    {todo.text}
                </span>
            </div>
            <button onClick={() => onRemove(todo.id)}>X</button>
        </ListItem>
    )
}

const TodoList = ({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove
}) => {
    const onSubmit = e => {
        e.preventDefault();
        onInsert(input);
        onChangeInput('');
    }

    const onChange = e => onChangeInput(e.target.value);

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