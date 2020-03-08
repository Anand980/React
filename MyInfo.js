import React from 'react'
import ReactDOM from 'react-dom'

function MyInfo(){
    const firstname = "Anand"
    const lastname = "Bharti"
    return(
        <div>
            <h1>Hello {firstname+" "+lastname}</h1>
            <p1>I am a s/w Engineer and I want to visit:</p1> 
            <ol>
            <li>Goa</li>
            <li>Bali</li>
            <li>Thailand</li>
            </ol>
        </div>
    );
}
export default MyInfo