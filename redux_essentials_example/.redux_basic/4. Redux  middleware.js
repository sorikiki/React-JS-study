// ✅ Synchronous action creators
// => usually, for any API request you'll want to dispatch at least three different kinds of actions!
// - An action informing the reducers that the request began. (ex. toggling isLoggedIn in the state )
// - An action informing the reducers that the request finished successfully.
// - An action informing the reducers that the request failed.

/*
    const LOGIN_REQUEST = 'user/LOGIN_REQUEST';
    const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
    const LOGIN_ERROR = 'user/LOGIN_ERROR';

    export const logInLoading = (id, password) => ({
        type: LOGIN_REQUEST,
        id,
        password
    })

    export const logInSuccess = () => ({
        type: LOGIN_SUCCESS
    })

    export const logInError = () => ({
        type: LOGIN_ERROR,
        error: '등록되지 않은 회원입니다.'
    })
*/

// ✅ Async action creators using 'thunks!'
// ❓ how do we use the synchronous action creators we defined earlier together with network requests?
// ❗ The standard way to do it with Redux is to use the Redux Thunk middleware.
// => by using this specific middleware, an action creator can return a function instead of an action object.
// => This way, the action creator becomes a thunk.
// => This function doesn't need to be pure; it is thus allowed to have side effects, including executing asynchronous API calls.
// => The function can also dispatch actions—like those synchronous actions we defined earlier.

/*
    const LOGIN_REQUEST = 'user/LOGIN_REQUEST';
    const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
    const LOGIN_ERROR = 'user/LOGIN_ERROR';

    export const logInLoading = (id, password) => (state, dispatch)=> ({
        if(state.user.id === id && state.user.password === password) {
            return setTimeout(()=> {
                dispatch(logInSuccess());
        }, 1000);
        else return setTimeout(() => { dispatch(logInError())}, 1000);
    })

    export const logInSuccess = () => ({
        type: LOGIN_SUCCESS
    })

    export const logInError = () => ({
        type: LOGIN_ERROR,
        error: '등록되지 않은 회원입니다.'
    })
*/