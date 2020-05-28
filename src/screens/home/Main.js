import React from 'react'
import styled from 'styled-components'
import bg from '../../images/1.jpg'
import {Button} from 'react-bootstrap'

const Section = styled.section`
height:400px;
width:100%;
padding:10px;
margin:0;
background: rgba(255, 255, 255, 0.4);
`
const Banner = styled.div`
height:100% !important;
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

export const Main = () => (
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
        
    </Section>
)