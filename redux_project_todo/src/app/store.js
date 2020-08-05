import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/login';
import todosReducer from '../reducers/todos';

export default configureStore({
  reducer: {
    user: userReducer,
    todos: todosReducer
  }
});
