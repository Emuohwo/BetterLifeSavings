import React from "react";
import { Nav } from "react-bootstrap";
import {Link} from 'react-router-dom'
import styled from "styled-components";

export const NavItem = ({ to, text }) => (
  <Div>
    <Nav.Item >
      <NavLink to={to}>{text}</NavLink>
    </Nav.Item>
  </Div>
);
const Div = styled.div`
  min-height: 40px;
  display: flex;
  align-items: center;
  :hover {
    background: rgba(255, 255, 255, 0.5) !important;
  };
`;
const NavLink = styled(Link)`
text-decoration:none !important;
padding: 20px !important;
`
