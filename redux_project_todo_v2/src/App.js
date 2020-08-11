import React from 'react';
import { 
  BrowserRouter as Router,
  Switch, 
  Route } from 'react-router-dom';
import Main from './Routers/Main';
import UserNotFound from './Routers/UserNotFound';

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

