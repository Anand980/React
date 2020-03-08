import React from 'react'
function ToDoItem(props){

    let msg = "checked";
   
   
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    console.log(props)
    return(
        <span class="script">        
            <input type="checkbox" checked={props.item.completed} 
            onChange={() => props.handleChange(props.item.id)}/>
            <p style={props.item.completed ? completedStyle: null}>{props.item.text}</p>      
        </span>
    );
}
export default ToDoItem