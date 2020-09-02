import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import user from './user';
import todos from './todo';
import counter, { counterSaga } from './counter';
import posts from './posts';

const reducer = combineReducers({
    user,
    todos,
    counter,
    posts,
});

export function* rootSaga() {
    yield all([counterSaga()]);
}

export default reducer;
