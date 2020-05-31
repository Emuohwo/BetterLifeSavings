import React from 'react'
import {Story} from './Story'
import {Card} from '../Card'

const TopStories = () =>(
    <Card>
        <h5>Top Stories</h5>
        <Story/>
        <Story />
        <Story />
    </Card>
)
export default TopStories;