import React from 'react'
import {SideBar} from './SideBar'
import {Main} from './Main'
import styled from 'styled-components'
const Section = styled.section`
border: 1px solid red;
box-sizing:border-box;
padding:0;
margin:0;

`

const Home = () => (
    <Section className='row'>
        <SideBar />
        <Main />
    </Section>
)
export default Home