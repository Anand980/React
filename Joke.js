import React from 'react'
function Joke(props){
    console.log(props)
    return(
        <div>
           <h3>{props.question}</h3>
           <h3>{props.punchline}</h3><br></br> 
        </div>
    );
}
export default Joke