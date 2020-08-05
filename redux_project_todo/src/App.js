import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import MainPage from './Router/MainPage';
import LogInPage from './Router/LogInPage';
import UserNotFound from './Router/UserNotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/logIn' component={LogInPage} />
        <Route path='*' component={UserNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
