import React from "react";
import logo from "../images/logo.png";
import wallet from "../images/wallet.png";
import { Button } from "react-bootstrap";

export const AppBar = () => (
  <div className="row" style={styles.appbar}>
    <div className="col-sm-4">
      <img src={logo} alt="better life savings" />
    </div>
    <div className="col-sm-4" style={styles.info}>
      <div>07030062542</div>
      <div>
        115 Chevron Drive <br />
        Lekki, Lagos
      </div>
    </div>
    <div className="col-sm-4">
      <div style={styles.wallet}>
        <img src={wallet} height="100%" alt="wallet" />
        <div style={styles.buttons}>
          <Button variant="outline-primary" size="sm">
            Register
          </Button>{" "}
          <Button variant="outline-primary" size="sm">
            Login
          </Button>
        </div>
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
