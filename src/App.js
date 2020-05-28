import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppBar } from './components/AppBar';
import {TopNav} from './components/TopNav'
import styles from './App.module.css'
import { Home,Register,Account, About } from './screens';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelope} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee,faEnvelope)

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
