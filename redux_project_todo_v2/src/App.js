import React from 'react';
import { 
  BrowserRouter as Router,
  Switch, 
  Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import Main from './Routers/Main';
import UserNotFound from './Routers/UserNotFound';
import PostItemPage from './Routers/PostItem';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='*' component={UserNotFound} />
      </Switch>
    </Router>
  );
}

export default App;

