import { combineReducer } from 'react-redux';
import todos from './todo';

const rootReducer = combineReducer({
    todos
})

export default rootReducer;
