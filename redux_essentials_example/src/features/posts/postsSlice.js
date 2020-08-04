import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
  ]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      postAdded: {
        reducer(state, action) {
          state.push(action.payload)
        },
        prepare(title, content) {
          return {
            payload: {
              id: nanoid(),
              title,
              content
            }
          }
        }
      },
      postUpdated: (state, action) => {
        const { id, title, content } = action.payload;
        state.map(post => {
          if (post.id === id) {
            post.title = title;
            post.content = content;
          }
        })
      }
    }
})

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;