// ✅ Middleware 
// action => middleware1 => next => middleware2 => next => reducer => store

// ✔ 'next' is a form of parameter function. ex. next(parameter)
// => It is similar to store.dispatch! However next pass its action to middleware or reducer(if were not middleware)❗
// ✔ If we use store.dispatch interally, action will be start from the first middleware. 
// ✔ When you want to logging, install 'redux-logger' which covers console with colors and shows dispatched time.


// ✅ Synchronous action creators
// => usually, for any API request you'll want to dispatch at least three different kinds of actions!
// - An action informing the reducers that the request began. (ex. toggling isLoggedIn in the state )
// - An action informing the reducers that the request finished successfully.
// - An action informing the reducers that the request failed.


// ✅ Async Flow
// It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. 
// ex. people use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.


// ✅ redux-thunk
// ❓ how do we use the synchronous action creators we defined earlier together with network requests?
// ❗ The standard way to do it with Redux is to use the Redux Thunk middleware.
// ✨ The redux-thunk middleware, which allows simple asynchronous use of dispatch.
// => by using this specific middleware, an action creator can return a function instead of an action object.
// => This way, the action creator becomes a thunk.
// => This function doesn't need to be pure; it is thus allowed to have side effects, including executing asynchronous API calls.
// => The function can also dispatch actions—like those synchronous actions we defined earlier.

