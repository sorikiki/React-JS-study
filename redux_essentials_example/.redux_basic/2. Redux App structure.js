// ✅ Creating the Redux Store

/*
    import { configureStore } from '@reduxjs/toolkit'
    import counterReducer from '../features/counter/counterSlice'

    export default configureStore({
      reducer: {
        counter: counterReducer
      }
    })
*/

// 1. The Redux store is created using the configureStore function from Redux Toolkit. 
// - configureStore requires that we pass in a reducer argument.
// - each of features(ex. counter) has its own reducer function.

// 2. A file named features/counter/counterSlice.js exports a reducer function for the counter logic. 

// 3. Redux Slices
// : Each state is a separate 'slice' of the Redux state.
// so that we referred to each reducer function as 'slice reducer' function.

// ✅ combinerReducers
// ❓ A Redux store needs to have a single "root reducer" function passed in when it's created. 
// ❗ If we tried calling all of the slice reducers by hand, it might look like this:
/*
    function rootReducer(state = {}, action) {
      return {
        users: usersReducer(state.users, action),
        posts: postsReducer(state.posts, action),
        comments: commentsReducer(state.comments, action)
      }
}
*/
// ✔ The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
// The key names produced by combineReducers() = the states of each reducer
/* ex)
    rootReducer = combineReducers({potato: potatoReducer, tomato: tomatoReducer})
// This would produce the following state object
    {
      potato: {
        // ... potatoes, and other state managed by the potatoReducer ...
      },
      tomato: {
        // ... tomatoes, and other state managed by the tomatoReducer, maybe some nice sauce? ...
      }
    }
*/

// ✨ ES6 property shorthand notation 
// A popular convention is to name reducers after the state slices they manage!
// combineReducers({ counter: counter, todos: todos }) => combineReducers({ counter, todos })