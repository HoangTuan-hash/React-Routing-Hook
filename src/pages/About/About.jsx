import React from 'react'
import DemoHOC from '../HOC/DemoHOC'

export default function About() {
    const renderTheoDK= ()=>{
        let i= 0;
        while(i<10){
            return <div>123</div>;
            i++;
        }
    }
    return (
        <div>
            <DemoHOC title={<h1>test</h1>}>
                {renderTheoDK()}
            </DemoHOC>
        </div>
    )
}

