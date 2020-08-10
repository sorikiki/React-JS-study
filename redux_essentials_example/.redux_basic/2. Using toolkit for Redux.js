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


// ✅ Writing Async Logic with Thunks => go to next file to review Javascript-async :)
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

// cf. More details about Using Middleware to Enable Async Logic
// By itself, a Redux store doesn't know anything about async logic so that any asynchronicity has to happen outside the store.
// => what if you want to have async logic interact with the store by dispatching or checking the current store state? 
// => Redux middleware
// => ✨ The most common async middleware is 'redux-thunk' ❕


// ✅ Several Custom Hooks, created by the React-Redux library 🙌
// The React-Redux library has a set of custom hooks that allow your React component to interact with a Redux store.

// 1. Reading data with 'useSelector' 
// : the useSelector hook lets our component extract whatever pieces of data it needs from the Redux store state.

// ❓ Our components can't talk to the Redux store directly, because we're not allowed to import it into component files.
// ✔ useSelector takes care of talking to the Redux store !
// If we pass in a selector function, it calls someSelector(store.getState()) for us, and returns the result ❕
// ex. const count = useSelector(selectCount)

// + We don't have to only use selectors that have already been exported, either.
// ex. const countPlusTwo = useSelector(state => state.counter.value + 2)

// ✨ useSelector guarantees our components to re-render any time an action has been dispatched and the Redux store has been updated.
// Thus, Components should always try to select the smallest possible amount of data they need from the store, which will help ensure that it only renders when it actually needs to.

// 2. Dispatching Actions with 'useDispatch'
// => We alreay know that if we had access to a Redux store, we could dispatch actions using action creators, like store.dispatch(increment()).
//❓ Since we don't have access to the store itself, we need some way to have access to 'just' the dispatch method.
// ✔ The useDispatch hook does that for us, and gives us the actual dispatch method from the Redux store.
/*
    const dispatch = useDispatch();
    ...
    <button
      className={styles.button}
      aria-label="Increment value"
      onClick={() => dispatch(increment())}
    >
</button>
*/


// ✅ Component State and Forms
// Note: Global state that is needed across the app should go in the Redux store.
// => State that's only needed in one place should be kept in component state.
// => it makes sense to keep that value in a useState hook in a specific component.
// => ex. Most form state probably shouldn't be kept in Redux.

// ❗ Notice that we use async thunks the same way we dispatch the other normal action creators.
// The component doesn't care whether we're dispatching a normal action or starting some async logic. 


// ✅ Providing the Store 
// So far, we have dealt with useSelector & useDispatch.
//❓ Since we didn't import the store, how do those hooks know what Redux store to talk to?
// In order for our hooks to work, we need to use a component called <Provider> to pass down the Redux store so they can access it. 

/* index.js 
  import React from 'react'
  import ReactDOM from 'react-dom'
  import './index.css'
  import App from './App'
  import store from './app/store'
  import { Provider } from 'react-redux'
  import * as serviceWorker from './serviceWorker'

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
*/


// ✅ Preparing actions payloads : prepare callback functions 💫
//❓ What if we needed to dispatch the same action from different components, or the logic for preparing the payload is complicated? 
// ✔ The "prepare callback" function can take multiple arguments, generate random values like unique IDs, and run whatever other synchronous logic is needed to decide what values go into the action object.
// ✔ It should then return an object with the payload field inside.
// ✔ The return object may also contain a meta field, which can be used to add extra descriptive values to the action, and an error field, which should be a boolean indicating whether this action represents some kind of an error.
/*
    // write actions creators by hand...
    function postAdded(title, content) {
    const id = nanoid()
    return {
        type: 'posts/postAdded',
        payload: { id, title, content }
    }
    }

    // prepare callback function
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
    }
    // other reducers here...
*/
// Note: Reducers should never calculate random values so always generate an unique ID or other random variables and put it in the action object.


// ✅ Extra reducers 
// extraReducers allows createSlice to respond to other action types besides the types it has generated.
// Like reducers, extraReducers can be an object containing Redux case reducer functions. 
// However, the keys should be other Redux string action type constants, and createSlice will not auto-generate action types or action creators for reducers included in this parameter.
// As with reducers, these case reducers will also be passed to createReducer and may "mutate" their state safely.
// If two fields from reducers and extraReducers happen to end up with the same action type string, the function from reducers will be used to handle that action type.


// ✅ createAction
//  It takes an action type and returns an action creator for that type. 
// The action creator can be called either without arguments or with a payload to be attached to the action.
// Also, the action creator overrides toString() so that the action type becomes its string representation.
/*
  const increment = createAction('counter/increment')

  let action = increment()
  // { type: 'counter/increment' }
    
  action = increment(3)
  // returns { type: 'counter/increment', payload: 3 }
    
  console.log(increment.toString())
  // 'counter/increment'
    
  console.log(`The action type is: ${increment}`)
  // 'The action type is: counter/increment'
*/