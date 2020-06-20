import React, { useContext } from "react";
import Form from "./form";
import { Button, Row, Col, Image } from "react-bootstrap";
import logo from "../../images/logo.jpeg";
import SideBar from "../../components/sidebar";
import styled from "styled-components";
import { AuthContext } from "../../context/authContext";
import { useHistory } from "react-router-dom";

const Div = styled.div`
  background: #43a047;
  height: fit-content;
  margin: 20px auto;
  padding: 50px;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  @media (min-width: 786px) {
    width: 80%;
  }
`;

const Section = styled.section`
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: #388e3c;
  border-radius: 15px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;
const FormContainer = styled.div`
  padding: 10px;
`;
const Top = styled(Col)`
  text-align: left;
  padding: 20px;
  color: white;
`;

const Register = () => {
  const {openLogin} = useContext(AuthContext);

  return (
    <Section className="row">
      <SideBar />
      <FormContainer className="col-sm-9">
        <Row>
          <Col sm={3}>
            <Image src={logo} roundedCircle width={200} />
          </Col>
          <Top sm={9}>
            <h1>Registration Form</h1>
            <p>
              Already registered ? Click{" "}
              <Button variant="info" size="sm" onClick={openLogin}>
                here
              </Button>{" "}
              to login.
            </p>
            <p>
              Upon registration, your phone will be used as your account number.
              Kindly ensure your use your official phone number for this
              registration
            </p>
            <p>
              If you do not have an email, you can{" "}
              <a href="https://mail.google.com">click here</a> or{" "}
              <a href="https://mail.yahoo.com">here</a> to create one. Email is
              required to ensure you to don't get locked out incase you forget
              your password.
            </p>
          </Top>
        </Row>
        <Div>
          <Form />
        </Div>
      </FormContainer>
    </Section>
  );
};
export default Register;
