import React from "react";
import { Nav } from "react-bootstrap";
import styled from "styled-components";

export const NavItem = ({ to, text }) => (
  <Div>
    <Nav.Item >
      <Nav.Link href={to}>{text}</Nav.Link>
    </Nav.Item>
  </Div>
);
const Div = styled.div`
  :hover {
    background: rgba(255, 255, 255, 0.5) !important;
  };
`;
