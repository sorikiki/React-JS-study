import React from 'react';
import { connect } from 'react-redux';
import { change_input, insert_todo, toggle_todo, remove_todo } from '../../Modules/todo';
import TodoList from './TodoList';

const TodoContainer = ({
    isLoggedIn,
    input,
    todos,
    change_input,
    insert_todo,
    toggle_todo,
    remove_todo
}) => {
    return (
        <TodoList
            isLoggedIn={isLoggedIn}
            input={input}
            todos={todos}
            onChangeInput={change_input}
            onInsert={insert_todo}
            onToggle={toggle_todo}
            onRemove={remove_todo}
            />
    )
}

export default connect(
    ({ user, todos }) => ({
        isLoggedIn: user.isLoggedIn,
        input: todos.input,
        todos: todos.todos
    }), {
        change_input,
        insert_todo,
        toggle_todo,
        remove_todo
    }
)(TodoContainer);