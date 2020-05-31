import React from "react";
import { Card, Button } from "react-bootstrap";
import styled from 'styled-components'
import Img from "../../../images/save1.jpg";

const PlanCard = styled(Card)`
border:none;
background:rgba(255,255,255,0.3);
:hover{
  box-shadow:0px 6px 6px 0px #bdbdbd;
  opacity:0.9;
}
box-shadow:0px 1px 0px 0px #bdbdbd;
@media(max-width:910px){
  margin:20px auto !important;

}
`
export const Plans = ({ title, children }) => (
  <div>
    <PlanCard style={{ width: "17rem"/*,margin:'20px auto'*/ }}>
      <Card.Img variant="top" src={Img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{children}</Card.Text>
        <Button variant="primary">Start</Button>
      </Card.Body>
    </PlanCard>
  </div>
);
