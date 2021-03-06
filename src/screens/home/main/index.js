import React from "react";
import styled from "styled-components";
import bg from "../../../images/1.jpg";
import { Button, Row, Col, Image } from "react-bootstrap";
import Img from "../../../images/save1.jpg";

const Section = styled.section`
  width: 100%;
  padding: 10px;
  margin: 0;
`;
const Banner = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  border-radius: 15px;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
`;
const H = styled.h4`
  padding: 7px;
  margin-top: 50px;
  margin-bottom: 30px;
  font-weight: bold;
  color: white;
  border-radius: 30px;
`;
const Plan = styled(Row)`
margin:80px 0;
padding: 20px 5px;
color: white;
  :hover {
    box-shadow: 0px 6px 6px 0px #bdbdbd;
    opacity: 0.9;
  }
  box-shadow: 0px 1px 0px 0px #bdbdbd;
`

const Main = () => (
  <Section className="col-sm-9">
    <Banner>
      <div>
        <h2 style={{ fontWeight: "bold" }}>Plan Your Future by Saving Today</h2>
        <h4>
          Do not save what is left after spending
          <br />
          spend what is left <strong>after saving</strong>
        </h4>
        <Button variant="secondary" size="sm">
          Start Now
        </Button>
      </div>
    </Banner>
    <H className='bg-secondary'>Saving Plans</H>
    <Plan>
      <Col sm={6}>
        <Image src={Img} thumbnail />
      </Col>
      <Col sm={6}>
        <h1>Daily Plan</h1>
        <p>This is the plan where you pick a particular and most convenient rate (e.g #100, #200 etc) and you pay daily. You can pay as much as you have, as many times and the sweetest thing is you can make debit anytime you like. Please note that you will be charged according to the rate at which pay on a monthly basis.</p>
        <Button variant="info">start now</Button>
      </Col>
    </Plan>
    <Plan>
      <Col sm={6}>
        <h1>Weekly Plan</h1>
        <p>This is the plan where you pick a particular and most convenient rate just like the daily plan and you pay on a weekly basis. You can make payments as much as you have and as many times. You will only be charged at your point of collection</p>
        <Button variant="info">start now</Button>
      </Col>
      <Col sm={6}>
        <Image src={Img} thumbnail />
      </Col>
    </Plan>
    <Plan>
      <Col sm={6}>
        <Image src={Img} thumbnail />
      </Col>
      <Col sm={6}>
        <h1>Monthly Plan</h1>
        <p>This is the plan where you pick a particular and most convenient rate and you pay on a monthly basis. You can make payments as much as you have and as many times. You will only be charged at your point of collection</p>
        <Button variant="info">start now</Button>
      </Col>
    </Plan>
    <Plan>
      <Col sm={6}>
        <h1>Express Plan</h1>
        <p>This plan doesn’t require you to pick a rate. Just pay as much as you have and as many times and make debit whenever you like</p>
        <Button variant="info">start now</Button>
      </Col>
      <Col sm={6}>
        <Image src={Img} thumbnail />
      </Col>
    </Plan>
  </Section>
);
export default Main;
