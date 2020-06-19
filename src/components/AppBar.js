import React, { useContext } from "react";
import logo from "../images/logo.jpeg";
import wallet from "../images/wallet.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/authContext";

const buttons = {
  margin: 10,
};
const Root = styled.div`
  padding: 0 20px;
`;
const Contact = styled.div`
font-size: 15,
letter-spacing: 4,
`;
const Wallet = styled.div`
  height: 50px;
  width: fit-content;
  display: flex;
  justify-content: right;
  alight-items: right;
  float: right;
  margin: 10px;
`;
const Div = styled.div`
  min-height: 100px;
  display: flex;
`;

export const AppBar = () => {
  const { openLogin } = useContext(AuthContext);
  return (
    <Root className="row">
      <Div className="col-sm-4">
        <img
          style={{ borderRadius: "50%", maxWidth: "100px", maxHeight: "105px" }}
          src={logo}
          alt="BetterLifeSavings Logo"
        />
      </Div>
      <Contact className="col-sm-4"></Contact>
      <div className="col-sm-4">
        <Wallet>
          <img src={wallet} height="100%" alt="wallet" />
          <Link to="/register" style={buttons}>
            <Button variant="outline-primary" size="sm">
              Register
            </Button>{" "}
          </Link>
          <Button
            variant="outline-primary"
            size="sm"
            style={buttons}
            onClick={openLogin}
          >
            Login
          </Button>
        </Wallet>
      </div>
    </Root>
  );
};
