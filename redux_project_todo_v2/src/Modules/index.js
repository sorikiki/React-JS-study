import { combineReducers } from 'redux';
import user from './user';
import todos from './todo';
import counter from './counter';

const reducer = combineReducers({
    user,
    todos,
    counter,
});

export default reducer;
