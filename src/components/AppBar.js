import React from "react";
import logo from "../images/logo.png";
import wallet from "../images/wallet.png";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'

export const AppBar = () => (
  <div className="row" style={styles.appbar}>
    <div className="col-sm-4">
      <img src={logo} alt="better life savings" />
    </div>
    <div className="col-sm-4" style={styles.info}>
      <div>08035691490, 08051921999</div>
      <div>
      6, omokudu ajayi street.<br/> 
      Okuneye estate, Egbe.<br /> 
      Lagos, Nigeria.
      </div>
    </div>
    <div className="col-sm-4">
      <div style={styles.wallet}>
        <img src={wallet} height="100%" alt="wallet" />
        <Link to='/register' style={styles.buttons}>
          <Button variant="outline-primary" size="sm">
            Register
          </Button>{" "}
          <Button variant="outline-primary" size="sm">
            Login
          </Button>
        </Link>
      </div>
    </div>
  </div>
);
const styles = {
  appbar: {
    padding:0,
    height: "50px !important",
  },
  info: {
    fontSize: 15,
    letterSpacing: 4,
  },
  wallet: {
    height: 50,
    width: "fit-content",
    display: "flex",
    justifyContent: "right",
    alightItems: "right",
    float: "right",
    margin: "10px",
  },
  buttons: {
    margin: 20,
  },
};
const add = '6, omokudu ajayi street. Okuneye estate. Ile-iwe bus-stop. Egbe. Lagos, Nigeria.'
