import React from "react"

function Conditional(props){
    //condition ? statement if true : statement if false
    
    if(props.isLoading===true)
    {
        return(
            <h1>Loading.....</h1>
        )
    }
    else{
        return(
            <h1>Conditional rendering</h1>
        )
    }
    
}

export default Conditional;