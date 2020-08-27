import { combineReducers } from 'redux';
import user from './user';
import todos from './todo';
import counter from './counter';
import posts from './posts';

const reducer = combineReducers({
    user,
    todos,
    counter,
    posts,
});

export default reducer;
