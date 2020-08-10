// ✅ Redux ?

// 1. What: a pattern and library for managing and updating application state, using events called "actions".
// => in a 'predictable' fashion.

// 2. When
// - You have large amounts of application state that are needed in many places in the app ex)
// - The app state is updated frequently over time
// - The logic to update that state may be complex
// - The app has a medium or large-sized codebase, and might be worked on by many people
// => ex. todos array 👌

// ✅ Friends useful to Redux ✨

// 'React components' can interact with a Redux 'store' by reading pieces of state and dispatching actions to update the store.
// 'Redux Toolkit' contains packages and functions that are essential for building a Redux app.
// 'Redux Devtools Extension' shows a history of the changes to the state in your Redux store over time. (time-travel debugging)

// ✅ Basic-Idea
// a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make the code predictable.
// => let's learn these 'specific patterns' ❕

// ✅ Immutability ⭐
// Redux expects that all state updates are done immutably.
// => In order to update values immutably, your code must make copies of existing objects/arrays, and then modify the copies.
// => by using 1. using JavaScript's array / object spread operators 2. array methods that return new copies of the array instead of mutating the original array

/*
    const obj = {
      a: {
        // To safely update obj.a.c, we have to copy each piece
        c: 3
      }
      b: 2,
    }


    const obj2 = {
      // copy obj
      ...obj
      // overwrite a
      a: {
        // copy obj.a
        ...obj.a,
        // overwrite c
        c: 42
      }
    }

    const arr = ["a", "b"];
    // Create a new copy of arr, with "c" appended to the end
    const arr2 = arr.concat("c");

    // or, we can make a copy of the original array:
    const arr3 = arr.slice();
    // and mutate the copy:
    arr3.push("c");
*/

// ✅ Terminology

// 1. Actions
// : An action is a plain JavaScript 'object' that has a type field.
//  => You can think of an action as an event that describes something that happened in the application.
// - 'type' field: a string that gives this action a descriptive name, like "todos/todoAdded".
//  => the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.
// - 'payload' field: it contains additional information about what happened by convention.

// 2. Action Creators
// : a function that creates and returns an action object.

// 3. Reducers
// : a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state
// ✨ A Redux reducer function is exactly the same idea as "reduce callback" function!
/* 
  ex)
    const actions = [
    { type: 'counter/increment' },
    { type: 'counter/increment' },
    { type: 'counter/increment' }
]

const initialState = { value: 0 }

const finalResult = actions.reduce(counterReducer, initialState)
*/

// ❗ rule 
// - ✔ They should only calculate the new state value based on the state and action arguments.
// - ✔ They are not allowed to modify the existing state.
//  => make a copy of the state, update the copy with new values, and return it.
//  => Otherwise, return the existing state unchanged
// - ✔ They must not do any asynchronous logic, calculate random values, or cause other "side effects". ❓
// - 👌 Reducers can use any kind of logic inside to decide what the new state should be: if/else, switch, loops, and so on.

// 4. Store ( 1 project 1 store ❗ )
// : The current Redux application state lives in an object called the store .
/*
  import { configureStore } from '@reduxjs/toolkit'

  const store = configureStore({ reducer: counterReducer })

  console.log(store.getState())
// {value: 0}
*/

// 5. Dispatch
// : The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object. 
// We typically call action creators to dispatch the right action.
/*
  const increment = () => {
    return {
      type: 'counter/increment'
    }
  }

  store.dispatch(increment())

  console.log(store.getState())
*/
// 6. Selectors
// : Selectors are functions that know how to extract specific pieces of information from a store state value. 
// => As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data!
/*
  const selectCounterValue = state => state.value

  const currentValue = selectCounterValue(store.getState())
  console.log(currentValue)
*/


// ✅ Redux: one-way data flow 🙌
// The store runs the reducers, and the state is updated based on what occurred ✨
