// 💥 Without 'Toolkit' Library

// ✅ Action types

// review 1. createSlice
// : A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
// The string from the 'name' option is used as the first part of each action type, and the key name of each reducer function is used as the second part.

// review 2. Actions
// They are the only source of information for the store. 
// You send them to the store using store.dispatch().
// Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed.

// 1. Types should typically be defined as string constants.
/*
    const ADD_TODO = 'ADD_TODO';
    const REMOVE_TODO = 'REMOVE_TODO'; 
*/

// 2. Once your app is large enough, you may want to move them into a separate module.
/*
    import { ADD_TODO, REMOVE_TODO } from '../actionTypes'
*/

// 3. It's a good idea to pass as little data in each action as possible.
// ex) it's better to pass index than the whole todo object.


// ✅ Action creators

// review : createSlice - reducers
// They must not do any "asynchronous logic", calculate random values, or cause other "side effects".
// Asynchronous logic can be made by thunk functions.
// Side effects include API calls and routing transitions.

// 1. Bound Action Creator ( automatically dispatch )

/*
    const boundAddTodo = text => dispatch(addTodo(text))
    const boundCompleteTodo = index => dispatch(completeTodo(index))
    ...
    boundAddTodo(text)
    boundCompleteTodo(index)
*/

// 2. Action creators can also be asynchronous and have side-effects.

// 3. bindActionCreators(actionCreators, dispatch)
// : Turns an object whose values are action creators, into an object with the same keys, but with every action creator wrapped into a dispatch call so they may be invoked directly.

// - actionCreators (Function or Object): An action creator, or an object whose values are action creators.
// - dispatch (Function): A dispatch function available on the Store instance.
// - Return (Function or Object): An object mimicking the original object, but with each function immediately dispatching the action returned by the corresponding action creator.
// => If you passed a function as actionCreators, the return value will also be a single function.

// Q. You might ask: why don't we bind the action creators to the store instance right away?
// A. Most likely you want to have a separate store instance per request so you can prepare them with different data, but binding action creators during their definition means you're stuck with a single store instance for all requests.

/* ex.

 * action types

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

 * other constants

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}


 * action creators

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
*/


// ✅ Designing the state shape

// review 1: 
// The reducer is a pure function that takes the previous state and an action, and returns the next state.

// review 2: let's recall important 'reducer' Rule ❗
// ❗ Things you should never do in a reducer.
// - Mutate its arguments
// - Asynchronous logic
// - Perform side effects like API calls and routing transitions
// - Call non-pure functions, e.g. Date.now() or Math.random().

// In Redux, all the application state is stored as a single object.
// Let's think of its shape before writing any code.

/* ex
  {
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
*/


// ✅ Handling Actions
/*
  import { VisibilityFilters } from './actions'

  const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
  }

  function todoApp(state, action) {
    if (typeof state === 'undefined') {
      return initialState
    }

    // For now, don't handle any actions
    // and just return the state given to us.
    return state
  }
*/

// One neat trick is to use the ES6 default arguments syntax to write this in a more compact way 🙌

/*
  import {
    SET_VISIBILITY_FILTER,
    VisibilityFilters
  } from './actions'

  ...

  function todoApp(state = initialState, action) {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return Object.assign({}, state, {
          visibilityFilter: action.filter
        })
      default:
        return state
    }
  }
*/

// ❗ Note that
// 1. We don't mutate the state.
// -  We create a copy with Object.assign(). Object.assign(state, { visibilityFilter: action.filter }) is also wrong: it will mutate the first argument. 
// - You can also enable the object spread operator proposal to write { ...state, ...newState } instead.
// 2. We return the previous state in the default case. 
// - It's important to return the previous state for any unknown action.

// ✔ separate action creators from reducer functions and export them to component.
// ✔ reducer functions import action types and make logic without mutating state.

