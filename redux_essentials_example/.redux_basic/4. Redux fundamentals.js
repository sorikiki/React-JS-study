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

// review 1: createSlice - reducers
// They must not do any "asynchronous logic", calculate random values, or cause other "side effects".

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

/* ex) TodoActionCreators.js
    export function addTodo(text) {
      return {
        type: 'ADD_TODO',
        text
      }
    }

    export function removeTodo(id) {
      return {
        type: 'REMOVE_TODO',
        id
      }
    }
*/

// Q. You might ask: why don't we bind the action creators to the store instance right away?
// A. Most likely you want to have a separate store instance per request so you can prepare them with different data, but binding action creators during their definition means you're stuck with a single store instance for all requests.