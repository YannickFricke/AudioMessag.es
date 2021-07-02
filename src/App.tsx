import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Home } from './routes/home';

export function App() {
  return <HashRouter>
    <Switch>
      <Route path="/play/:audioData">
        <Header />
      </Route>
      <Route>
        <Home />
      </Route>
    </Switch>
  </HashRouter>;
}
