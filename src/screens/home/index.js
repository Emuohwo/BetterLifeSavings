import React from 'react'
import {SideBar} from './SideBar'
import {Main} from './Main'
import styled from 'styled-components'
const Section = styled.section`
border: 3px solid red
`

const Home = () => (
    <Section>
        <SideBar />
        <Main />
    </Section>
)
export default Home