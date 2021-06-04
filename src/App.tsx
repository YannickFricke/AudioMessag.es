import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Header } from './components/header';

export function App() {
  return <HashRouter>
    <Switch>
      <Route exact path="/play">
        <Header />
      </Route>
      <Route>
        <Header />
      </Route>
    </Switch>
  </HashRouter>;
}
