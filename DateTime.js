import React from 'react'

function DateTime(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if(hours < 12){timeOfDay="Morning"}
    else if(hours>=12 && hours<17){timeOfDay="Afternoon"}
    else{timeOfDay="Night"}
    return(
    <div>Good {timeOfDay}<br></br> {date+" "+hours}</div>
    );
}
export default DateTime