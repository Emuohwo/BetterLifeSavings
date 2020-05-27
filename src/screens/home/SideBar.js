import React from "react";
import { Form} from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Div = styled.div`
  margin: 0;
  background: rgba(255, 255, 255, 0.5);
`;
const Search = styled(Form)`
  margin: 20px 0;
`;
const Icon = styled.div`
display:flex;
justify-content:space-between;
`
const IconCard = styled.div`
padding:20px 10px;
background:white;
border-radius:15px;
box-shadow:0px 1px 0px 0px #bdbdbd 
`
export const SideBar = () => (
  <Div className="col-sm-3">
    <Search>
      <Form.Group controlId="formBasicEmail">
        <Form.Label srOnly>Search</Form.Label>
        <Form.Control type="text" placeholder="search..." />
      </Form.Group>
    </Search>
    <IconCard>
    <h5>Stay In Touch</h5>
    <Icon>
    <FontAwesomeIcon icon={['fab', 'whatsapp']} size='2x' color='#00e676'/>
    <FontAwesomeIcon icon={['fab', 'twitter']} size='2x' color='#00b0ff'/>
    <FontAwesomeIcon icon={['fab', 'facebook']} size='2x' color='#0091ea'/>
    <FontAwesomeIcon icon={['fab', 'pinterest']} size='2x' color='#ff1744'/>
    <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' color='#ff4081'/>
    <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' color='#0091ea'/>
    </Icon>
    </IconCard>
  </Div>
);
