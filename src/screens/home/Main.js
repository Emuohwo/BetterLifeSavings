import React from 'react'
import styled from 'styled-components'
import bg from '../../images/1.jpg'
import {Button} from 'react-bootstrap'

const Section = styled.section`
background:blue;
height:400px;
float:right !important;
`
const Banner = styled.div`
height:100% !important;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
color:white;
background-image:url(${bg});
background-size:cover;
background-position:center;
h1{
    margin:auto;
   
`

export const Main = () => (
    <Section className='col-sm-9'>
        <Banner>
            <div>
            <h1>
                Plan Your Future by Saving Today
            </h1>
            <h4>
                Do not save what is left after spending<br/>
                spend what is left <strong>after saving</strong>
            </h4>
            <Button variant="primary" size="sm">Start Now</Button>
            </div>
        </Banner>
        
    </Section>
)