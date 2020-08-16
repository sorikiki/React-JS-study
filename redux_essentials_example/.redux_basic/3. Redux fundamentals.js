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


// ✅ Splitting Reducers
// This is called 'reducer composition', and it's the fundamental pattern of building Redux apps.

/* Before Splitting
  function todoApp(state = initialState, action) {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return Object.assign({}, state, {
          visibilityFilter: action.filter
        })
      case ADD_TODO:
        return Object.assign({}, state, {
          todos: [
            ...state.todos,
            {
              text: action.text,
              completed: false
            }
          ]
        })
      case TOGGLE_TODO:
        return Object.assign({}, state, {
          todos: state.todos.map((todo, index) => {
            if (index === action.index) {
              return Object.assign({}, todo, {
                completed: !todo.completed
              })
            }
            return todo
          })
        })
      default:
        return state
    }
  }
*/

/* Extract todos from a main reducer.
  function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: todos(state.todos, action)
      })
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: todos(state.todos, action)
      })
    default:
      return state
  }
}
*/

/* Extract both todos and visibilityFilter from a main reducer.
  function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

*/

// Note that each of these reducers is managing its own part of the global state. 
// The state parameter is different for every reducer, and corresponds to the part of the state it manages.


// ✨ combineReducers()
// And like other reducers, combineReducers() does not create a new object if all of the reducers provided to it do not change state.

/*
  import { combineReducers } from 'redux'

  const todoApp = combineReducers({
    visibilityFilter,
    todos
  })

  export default todoApp
*/

// This is same with...

/*
  export default function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}
*/

// ✔ Note for ES6 new syntax
// Because combineReducers expects an object, we can put all top-level reducers into a separate file, 
// export each reducer function, and use import * as reducers to get them as an object with their names as the keys.
/*
  import { combineReducers } from 'redux'
  import * as reducers from './reducers'

  const todoApp = combineReducers(reducers)
*/


// ✅ Store

// 1. its reponsibility: 

// Holds application state
// Allows access to state via getState()
// Allows state to be updated via dispatch(action)
// Registers listeners via subscribe(listener)
// Handles unregistering of listeners via the function returned by subscribe(listener).

// 2. ❗ A single store in a Redux application. 
// => When you want to split your data handling logic, you'll use reducer composition instead of many stores.

// 3. createStore(): to define store
// - Argument : createStore(reducer, [preloadedState], [enhancer])
// - You may optionally specify the initial state as the second argument to createStore(). 
// => This is useful for hydrating the state of the client to match the state of a Redux application running on the server.


// ✅ Data flow
// The data lifecycle in any Redux app follows these 4 steps:

// 1. You call store.dispatch(action)
// You can call store.dispatch(action) from anywhere in your app, including components and XHR callbacks, or even at scheduled intervals. ❓

// 2. The Redux store calls the reducer function you gave it.
// The store will pass two arguments to the reducer: the current state tree and the action. 

// 3. The root reducer may combine the output of multiple reducers into a single state tree.

// 4. The Redux store saves the complete state tree returned by the root reducer.


// ✅ Presentational(no dependency on Redux) and Container Components(related to Redux) 

// React bindings for Redux separate presentational components from container components. 
// This approach can make your app easier to understand and allow you to more easily reuse components. 

// - Presentational components: read data from props, invoke callback from props and written by hand.
// - Container components: subscribe to Redux state, dispatch redux actions and usually generated by React Redux.

// - Technically you could write the container components by hand using store.subscribe(). 
// - We don't advise you to do this because React Redux makes many performance optimizations that are hard to do by hand. 
// - For this reason, rather than write container components, we will generate them using the 'connect() function' provided by React Redux, as you will see below.


// ✅ store.subscribe(listener)
// - Argument: listener (Function): The callback to be invoked any time an action has been dispatched, and the state tree might have changed.
// =>  You may call getState() inside this callback to read the current state tree. 
// - Return (Function): A function that unsubscribes the change listener.

/*
  function select(state) {
    return state.some.deep.property
  }

  let currentValue
  function handleChange() {
    let previousValue = currentValue
    currentValue = select(store.getState())

    if (previousValue !== currentValue) {
      console.log(
        'Some deep nested property changed from',
        previousValue,
        'to',
        currentValue
      )
    }
  }

  const unsubscribe = store.subscribe(handleChange)
  unsubscribe()
*/


// ✅ connect() : import from 'react-redux'

// Feature: It provides its connected component with 1. the pieces of the data it needs from the store, 
// and 2. the functions it can use to dispatch actions to the store.

// Return: It does not modify the component class passed to it; 
// instead, it returns a new, connected component class that wraps the component you passed in.
// ✔ The return of connect() is a wrapper function that takes your component and returns a wrapper component with the additional props it injects.
// ✔ In most cases, the wrapper function will be called right away, without being saved in a temporary variable.
/*
  export default connect(
    mapState,
    mapDispatch
  )(Login)
*/

// Argument:
// function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
// - The mapStateToProps and mapDispatchToProps deals with your Redux store’s state and dispatch, respectively. 
// => state and dispatch will be supplied to your mapStateToProps or mapDispatchToProps functions as the first argument.
// => The returns of mapStateToProps and mapDispatchToProps are referred to internally as stateProps and dispatchProps, respectively.
// => They will be supplied to mergeProps, if defined, as the first and the second argument, where the third argument will be ownProps. 
// => The combined result, commonly referred to as mergedProps, will then be supplied to your connected component.

// ◼ mapStateToProps?: (state, ownProps?) => Object
// : If a mapStateToProps function is specified, the new wrapper component will 'subscribe' to Redux store updates.
// => // - If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps.
// - parameters: state(object), ownProps(object)
// - state: If your mapStateToProps function is declared as taking one parameter, it will be called whenever the store state changes, and given the store state as the only parameter.
// - ownProps: If your mapStateToProps function is declared as taking two parameters, it will be called whenever the store state changes or when the wrapper component receives new props (based on shallow equality comparisons).
// - return: The results of mapStateToProps must be 'a plain object', which will be merged into the wrapped component’s props. 
// ✔ Note that returning a mutated object of the same reference is a common mistake that can result in your component not re-rendering when expected.
/*
  ex. const mapStateToProps = (state, ownProps) => ({
  todo: state.todos[ownProps.id]
})
*/

// ◼ mapDispatchToProps?: Object | (dispatch, ownProps?) => Object
// - parameters : dispatch(function), 2. ownProps(object)
// - dispatch: If your mapDispatchToProps is declared as a function taking one parameter, it will be given the dispatch of your store.

/*
  const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' })
  }
}
*/
// - ownProps: If your mapDispatchToProps function is declared as taking two parameters, it will be called with dispatch as the first parameter and the props passed to the wrapper component as the second parameter, and will be re-invoked whenever the connected component receives new props.
// - return: Your mapDispatchToProps functions are expected to return an object. 
// => Each fields of the object should be a function, calling which is expected to dispatch an action to the store.

// - object shorthand form: mapDispatchToProps may be an object where each field is an action creator.💖
// => In this case, if you pass an object full of action creators instead of a function, connect will automatically call bindActionCreators for you internally.
// => bindActionCreators: React-Redux binds the dispatch of your store to each of the action creators.

/*
// internally, React-Redux calls bindActionCreators
// to bind the action creators to the dispatch of your store
  bindActionCreators(mapDispatchToProps, dispatch)
*/

/*
  import { addTodo, deleteTodo, toggleTodo } from './actionCreators'

  const mapDispatchToProps = {
    addTodo,
    deleteTodo,
    toggleTodo
  }

  export default connect(
    null,
    mapDispatchToProps
  )(TodoApp)
*/

// ◼ mergeProps?: (stateProps, dispatchProps, ownProps) => Object
// : If specified, defines how the final props for your own wrapped component are determined.
// => If you do not provide mergeProps, your wrapped component receives { ...ownProps, ...stateProps, ...dispatchProps } by default.

// ◼ options?: Object


// ◼ The Arity of mapToProps Functions
// - The number of declared function parameters of mapStateToProps and mapDispatchToProps determines whether they receive ownProps.
// - Functions with no mandatory parameters or two parameters*will receive ownProps.
/*
  function mapStateToProps(state) {
  console.log(state) // state
  console.log(arguments[1]) // undefined
}

const mapStateToProps = (state, ownProps = {}) => {
  console.log(state) // state
  console.log(ownProps) // {}
}
*/
/*
  const mapStateToProps = (state, ownProps) => {
  console.log(state) // state
  console.log(ownProps) // ownProps
}

function mapStateToProps() {
  console.log(arguments[0]) // state
  console.log(arguments[1]) // ownProps
}

const mapStateToProps = (...args) => {
  console.log(args[0]) // state
  console.log(args[1]) // ownProps
}
*/

// ✅ useSelector() vs connect()
// when a parent to a container component re-renders, re-rendering is prevented 
// if the props of container component do not change.
// However, looking up state using useSelector, this automatical process is not conducted. => React.memo 


// ✅ Review createStore
// : more about 'createStore'!
// ex. createStore(reducer, [preloadedState], [enhancer])
// => its argument
/*
  reducer (Function): A reducing function that returns the next state tree, given the current state tree and an action to handle.

  [preloadedState] (any): The initial state. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. If you produced reducer with combineReducers, this must be a plain object with the same shape as the keys passed to it. Otherwise, you are free to pass anything that your reducer can understand.

  [enhancer] (Function): The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc. The only store enhancer that ships with Redux is applyMiddleware().
*/

// ✅ state initializaiton (preloadedState) 💖
// ✔ Without combineReducers()
// => preloadedState always wins over state = ... in the reducer because the state passed to the reducer is preloadedState and is not undefined, so the ES6 argument syntax doesn't apply.

// ✔ With combineReducers()
// => If you produced reducer with combineReducers, this must be a plain object with the same shape as the keys passed to it.
// => Those reducers whose state is specified in preloadedState will receive that state. Other reducers will receive undefined and because of that will fall back to the state = ... default argument they specify.

// ✔ Note
// => Reducers whose initial state is populated using preloadedState will still need to provide a default value to handle when passed a state of undefined.
// => This can be any non-undefined value; there's no need to duplicate the section of preloadedState here as the default.