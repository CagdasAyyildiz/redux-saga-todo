import './App.css';
import React from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Todo from './components/Todo';
import TodoDetails from './components/TodoDetails';

export const history = createHistory();

function App() {
  return (
  <Router history={history}>
    <Switch>
      <Route exact={true} path="/" component={Todo} />
      <Route path="/:id" component={TodoDetails} />
			<Redirect path="*" to="/"/>
    </Switch>
  </Router>
  );
}

export default App;
