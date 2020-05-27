import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
background:red;
margin:0;
`
export const SideBar = () => (
    <Div className='col-sm-3'>
        <div style={{background:'green'}}>
        Hello gus this is a sidebar
        </div>
    </Div>
)