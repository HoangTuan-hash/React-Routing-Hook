import React from 'react'
import DemoHOC from '../HOC/DemoHOC'

export default function About() {
    return (
        <div>
            <DemoHOC title={<h1>test</h1>}>
                <h1>DEmo children</h1>
            </DemoHOC>
        </div>
    )
}

