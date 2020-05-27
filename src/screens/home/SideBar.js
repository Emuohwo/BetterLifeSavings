import React from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const Div = styled.div`
  background: red;
  margin: 0;
`;
const Search = styled(Form)`
  margin: 20px;
`;
export const SideBar = () => (
  <Div className="col-sm-3">
    <Search>
      <Form.Group controlId="formBasicEmail">
        <Form.Label srOnly>Search</Form.Label>
        <Form.Control type="text" placeholder="search..." />
      </Form.Group>
    </Search>
  </Div>
);
