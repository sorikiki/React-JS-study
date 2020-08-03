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


// ✅ combineReducers
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


// ✅ createSlice
// : A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
// The string from the 'name' option is used as the first part of each action type, and the key name of each reducer function is used as the second part.
// => So, the "counter" name + the "increment" reducer function generated an action type of {type: "counter/increment"}
// => ex) console.log(counterSlice.actions.increment()) // {type: "counter/increment"}

//✨ it is something like 'useReducer' in hook in that it contains reducer function and initial state.
// => What is diffent is that createSlice produces action creators & action types!
/*
    export const counterSlice = createSlice({
      name: 'counter',
      initialState: {
        value: 0
      },
      reducers: {
        increment: state => {
          // Redux Toolkit allows us to write "mutating" logic in reducers. It
          // doesn't actually mutate the state because it uses the immer library,
          // which detects changes to a "draft state" and produces a brand new
          // immutable state based off those changes
          state.value += 1
        },
        decrement: state => {
          state.value -= 1
        },
        incrementByAmount: (state, action) => {
          state.value += action.payload
        }
      }
    })

    export const { increment, decrement, incrementByAmount } = counterSlice.actions;
    export default counterSlice.reducer
*/

// => Moreover, it generates the slice reducer function that knows how to respond to all these action types.
/*
    const newState = counterSlice.reducer(
    { value: 10 },
    counterSlice.actions.increment()
)
console.log(newState)
// {value: 11}
*/


// ✅ Immer🤍 make us write 'mutating logic' in Redux Toolkit's createSlice and createReducer
//  Immer tracks all the changes you've tried to make, and then uses that list of changes to return a safely immutably updated value, as if you'd written all the immutable update logic by hand.
// ❗ You can only write "mutating" logic in Redux Toolkit's createSlice and createReducer because they use Immer inside!


// ✅ Writing Async Logic with Thunks
// Synchronous: Actions are dispatched => the store runs the reducers and calculates the new state => the dispatch function finishes.
// However, we also need a place to put that async logic in our Redux apps.
// Using 'thunks' which is a special kind of Redux function that can contain asynchronous logic. 
// - An inside thunk function, which gets dispatch and getState as arguments.
// - The outside creator function, which creates and returns the thunk function.

/* example 1
    export const incrementAsync = amount => dispatch => {
      setTimeout(() => {
        dispatch(incrementByAmount(amount))
      }, 1000)
    }

    store.dispatch(incrementAsync(5))
*/

/* example 2
    // the outside "thunk creator" function
    const fetchUserById = userId => {
      // the inside "thunk function"
      return async (dispatch, getState) => {
        try {
          // make an async call in the thunk
          const user = await userAPI.fetchById(userId)
          // dispatch an action when we get the response back
          dispatch(userLoaded(user))
        } catch (err) {
          // If something went wrong, handle it here
        }
      }
    }
*/

// cf. using thunks requires that the redux-thunk middleware (a type of plugin for Redux) be added to the Redux store when it's created. 
// Fortunately, Redux Toolkit's configureStore function already sets that up for us automatically, so we can go ahead and use thunks here.