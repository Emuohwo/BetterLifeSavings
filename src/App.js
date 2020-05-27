import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppBar } from './components/AppBar';
import {TopNav} from './components/TopNav'
import styles from './App.module.css'
import { Home,Register,Account, About } from './screens';

const App = () => (
  <div className={styles.App}>
    <AppBar />
    <TopNav />
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/account">
        <Account />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);
export default App;
