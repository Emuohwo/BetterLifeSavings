import React from 'react'
import SideBar from '../../components/sidebar'
import Main from './main'
import styled from 'styled-components'
const Section = styled.section`
border: 1px solid rgba(255, 255, 255, 0.7);
border-radius:15px;
background: #388e3c;
overflow:hidden;
box-sizing:border-box;
padding:0;
margin:0;

`

const Home = () => (
    <Section className='row'>
        <Main />
        <SideBar />
    </Section>
)
export default Home