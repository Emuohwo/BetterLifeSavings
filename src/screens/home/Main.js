import React from 'react'
import styled from 'styled-components'
import bg from '../../images/1.jpg'

const Section = styled.section`
background:blue
`
const Banner = styled.div`
background:url(bg);
background-size:cover;
background-position:center
`

export const Main = () => (
    <Section className='col-sm-8'>
        <Banner>

        </Banner>
    </Section>
)