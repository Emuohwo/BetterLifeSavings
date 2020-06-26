import React from "react";
import { Switch, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { TopNav } from "./components/TopNav";
import LoginForm from "./components/LoginForm";
import styles from "./App.module.css";
import PasswordReset from "./components/password-reset";
import { Home, Register, Account, About, Contact, Footer } from "./screens";
import RegisterRoute from './components/RegisterRoute';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faEllipsisV,
  faShareAlt,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee, faEnvelope, faShareAlt, faEllipsisV, faPhone);

const App = () => (
  <div className={styles.App}>
    <AppBar />
    <TopNav />
    <LoginForm />
    <Switch>
      <Route path="/password-reset">
        <PasswordReset />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <RegisterRoute path="/register">
        <Register />
      </RegisterRoute>
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
    <Footer />
  </div>
);
export default App;
