import { createSlice, createAction } from '@reduxjs/toolkit';

const initialState = [{
    id: 1,
    text: 'this is for a test',
    done: false,
    modified: false
}]

const modify_todos = createAction('todos/modify_todos')

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        insert_todos: (state, action) => state.concat(action.payload),

        toggle_todos: (state, action) => state.map( todo => todo.id === action.payload.id ? todo.done = !todo.done : todo ),

        modify_todos: {
            reducer (state, action) {
                state.map( todo => {
                    if(todo.id === action.payload.id) {
                        todo.modified = action.payload.modified;
                    }
                })
                },
            prepare (id, text) {
                return {
                    payload: {
                        id,
                        text,
                        modified: true
                    }
                }
            }
        },

        delete_todos: (state, action) => state.filter(todo => todo.id !== action.payload.id)
    },
    extraReducers:  {
        [modify_todos] : (state, action) => {
            state.map( todo => {
                if(todo.modified === true) {
                    todo.text = action.payload.text;
                }
            })
        }
    }
})

export const { insert_todos, toggle_todos, delete_todos } = todosSlice.actions;

export default todosSlice.reducer;