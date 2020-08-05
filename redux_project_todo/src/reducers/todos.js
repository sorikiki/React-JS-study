import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [{
    id: 1,
    text: 'this is for a test',
    done: false,
    modified: false
}]

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        insert_todos: {
            reducer (state, action) { return state.concat(action.payload) },
            prepare (id, input) {
                return {
                    payload: {
                        id,
                        text: input,
                        done: false,
                        modified: false
                    }
                }
            }
        },

        toggle_todos: (state, action) => {
            state.map( todo => {
                if(todo.id === action.payload.id) {
                    return todo.done = !todo.done;
                } 
                else return todo;
            }
            )
        },

        modify_todos: {
            reducer (state, action) {
                action.payload.id && state.map( todo => {
                    if(todo.id === action.payload.id) {
                        return todo.modified = !todo.modified;
                    } 
                    else if(todo.modified === true) {
                        return todo.modified = false;
                    }
                    else return todo;
                })
                action.payload.text && state.map(todo => {
                    if(todo.modified === true) {
                        todo.text = action.payload.text;
                        return todo.modified = false;
                    }
                    else return todo;
                })
            },
            prepare (value) {
                const type = typeof value;
                if(type === 'number') {
                    return {
                        payload: { id: value }
                    }
                } else {
                    return {
                        payload: { text: value }
                    }
                }
        }},

        delete_todos: (state, action) => state.filter(todo => todo.id !== action.payload.id)
    }
})

export const { insert_todos, toggle_todos, modify_todos, delete_todos } = todosSlice.actions;

export default todosSlice.reducer;