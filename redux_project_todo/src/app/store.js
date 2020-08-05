import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../reducers/login';
import todosReducer from '../reducers/todos';

export default configureStore({
  reducer: {
    login: loginReducer,
    todos: todosReducer
  }
});
