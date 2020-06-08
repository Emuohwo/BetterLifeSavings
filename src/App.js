import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppBar } from './components/AppBar';
import {TopNav} from './components/TopNav'
import styles from './App.module.css'
import { Home,Register,Account, About, Contact } from './screens';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelope, faEllipsisV,faShareAlt} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee,faEnvelope,faShareAlt, faEllipsisV)

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
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);
export default App;
