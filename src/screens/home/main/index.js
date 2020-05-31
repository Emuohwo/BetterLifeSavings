import React from 'react'
import styled from 'styled-components'
import bg from '../../../images/1.jpg'
import {Button, CardDeck} from 'react-bootstrap'
import {Plans} from './Plans'

const Section = styled.section`
width:100%;
padding:10px;
margin:0;
background: rgba(255, 255, 255, 0.4);
`
const Banner = styled.div`
height:400px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
color:white;
border-radius:15px;
background-image:url(${bg});
background-size:cover;
background-position:center;
`
const Deck = styled(CardDeck)`
margin: 20px auto;
margin-left:20px;
padding:0px !important;
width:100%;
@media(max-width:910px){
    margin:auto !important;
  }
`
const H = styled.h4`
background:#2962ff;
padding:10px;
margin-top:50px;
margin-bottom:30px;
font-weight:bold;
color:white;
border-radius:30px;

`

const Main = () => (
    <Section className='col-sm-9'>
        <Banner>
            <div>
            <h2 style={{fontWeight:'bold' }}>
                Plan Your Future by Saving Today
            </h2>
            <h4>
                Do not save what is left after spending<br/>
                spend what is left <strong>after saving</strong>
            </h4>
            <Button variant="primary" size="sm">Start Now</Button>
            </div>
        </Banner>
        <H>Saving Plans</H>
        <Deck>
        <Plans title='Daily Plan'>
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer
        </Plans>
        <Plans title='Weekly Pan'>
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer
        </Plans>
        <Plans title='Monthly Plan'>
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer
        </Plans>
        </Deck>
        
    </Section>
)
export default Main;