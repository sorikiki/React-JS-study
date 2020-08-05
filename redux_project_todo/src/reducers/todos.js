import { createSlice, createAction } from '@reduxjs/toolkit';

const initialState = {
    id: 1,
    text: 'this is for a test',
    done: false,
    modified: false
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        insert_todos: (state, action) => state.concat(action.payload),

        toggle_todos: (state, action) => {
            state.map( todo => {
                if(todo.id === action.payload.id) {
                    todo.done = !todo.done;
                }
            })   
        },

        modify_todos: {
            reducer (state, action) {
                state.map( todo => {
                    if(todo.modified === true) {
                        todo.text = action.payload.text;
                    }
                })
            },
            prepare (id, text, done) {
                return {
                    payload: {
                        id,
                        text,
                        done,
                        modified: true
                    }
                }
            }
        },

        delete_todos: (state, action) => state.filter(todo => todo.id !== action.payload.id)
    }
})

export const { insert_todos, toggle_todos, modify_todos, delete_todos } = todosSlice.actions;

export default todosSlice.reducer;