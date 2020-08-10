const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

let id = 1;

export const change_input = input => ({
    type: CHANGE_INPUT,
    input
})

export const insert_todo = text => ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false
    }
})

export const toggle_todo = id => ({
    type: TOGGLE,
    id
})

export const remove_todo = id => ({
    type: REMOVE,
    id
})

const initialState = {
    input: '',
    todos: [{
            id: 1,
            text: 'this is for a test',
            done: false
        }]
}

const todos = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            }
        case INSERT:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            };
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map( todo =>
                    todo.id === action.id? {...todo, done: !todo.done} : todo
                    )
            };
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter( todo => todo.id !== action.id )
            };
        default:
            return state;
        }
}

export default todos;