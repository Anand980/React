import React from 'react';
import './App.css';
import FormComponent from "./FormComponent"


class Form extends React.Component {
  constructor(){
    super()

    this.state = {name: "Sheldon Cooper", age: "20", isloggedin: true, count: 0, isLoading: true, character:{}, apiloading:false, unreadMessages: ["a", "b"], firstName:"", lastName:"" ,isFriendly:true, gender:""}
   
    this.handleFormChange = this.handleFormChange.bind(this)
    
  }

  
  handleFormChange(event){
    const {name,value,type,checked} = event.target
      type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })     
  }

 

 
  render()
    {
        return(
        <FormComponent 
        handleFormChange = {this.handleFormChange}
        data = {this.state}
        />
        )
        
    }
}

export default Form;
