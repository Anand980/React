import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import MyInfo from './MyInfo'
import ToDoList from './ToDoList'
import ContactCard from './ContactCard'
import Joke from './Joke'
import jokesData from './jokesData'
import Product from './Product'
import vschoolProducts from './vschoolProducts'
import ToDoItem from "./ToDoItem"
import toDoData from './toDoData'
import Conditional from './Conditional'
import Form from './Form'
import MemeGenerator from './MemeGenerator'

//import DateTime from "./DateTime"
/*
function App() {
  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />)
  const productComponents = vschoolProducts.map(product => <Product key={product.id} name={product.name} owner={product.owner} />)
  const toDoItems = toDoData.map()
  return(
    <div>
       <Header />item => <ToDoItem key={item.id} item={item}/>
        <MyInfo />
        <ToDoList />        
        <div className="contacts">
          <ContactCard 
            contact={{name: "Sundar Pichai",
            imgUrl: "data:image/jpeg;base64,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",
            phone: "xxxxxxxxx",
            email: "xxxxxxxxx"}}
          />
          <ContactCard 
            contact={{name: "Larry Page",
            imgUrl: "data:image/jpeg;base64,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",
            phone: "xxxxxxxxx",
            email: "xxxxxxxxx"}}
          />
          <ContactCard 
            contact={{name: "Donald Trump",
            imgUrl: "data:image/jpeg;base64,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",
            phone: "xxxxxxxxx",
            email: "xxxxxxxxx"}}
          />
        </div>
        <div>
          {jokeComponents}
          
        </div>
        <div>{productComponents}</div>
        <div className="todo-list">{toDoItems}</div>
        <Footer />
    </div>
);
}
*/
//https://swapi.co/

class App extends React.Component {
  constructor(){
    super()

    this.state = {name: "Sheldon Cooper", age: "20", isloggedin: true, todos: toDoData, count: 0, isLoading: true, character:{}, apiloading:false, unreadMessages: ["a", "b"], firstName:"", lastName:"" ,isFriendly:true, gender:"", favColor:""}
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.logactivity = this.logactivity.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {todos: updatedTodos}
    
      })
  }  

  handleClick(){
    this.setState(prevState => {
      return{
        count: prevState.count + 1
      }
    })
  }

  handleFormChange(event){
    const {name,value,type,checked} = event.target
      type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })     
  }

  handleSublit(event){
    event.preventDefault()
  }

  componentDidMount(){
    setTimeout(()=>{this.setState({isLoading: false})},1500)
    this.setState({apiloading:true})
    fetch("https://swapi.co/api/people/1/")
    .then(response=>response.json())
    .then(data => {this.setState({ character : data , apiloading:false}) })
  }

  logactivity()
  {   
      this.setState(prevState=>{return{isloggedin:!prevState.isloggedin}})
  }


  render(){
    let buttontext = this.state.isloggedin ? "LOG OUT" : "LOG IN"
    let displaytext = this.state.isloggedin ? "LOG IN" : "LOG OUT"
    let wordDisplay
      if(this.state.isloggedin){
        wordDisplay = "in"
      }
      else{
        wordDisplay = "out"
      }
      const toDoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>)
      const apitext = this.state.apiloading ? "API Loading..." : this.state.character.name
    return(
      
      <div>

        <div>
        <Header />
        <MemeGenerator />
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 className="center">{apitext}</h1>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
        <h1>You are currently {wordDisplay}</h1>
        
        <div>
        {toDoItems}
        </div>

        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.handleClick}>Click Me</button>
          <p>You have clicked {this.state.count} time</p>
          <Conditional isLoading={this.state.isLoading}/>
          
          <h2>You have {this.state.unreadMessages.length} unread messages</h2>
          
        </div>
        <br/>
        <div>
        <Form />
        </div>
        <br />
        <br />
        
        
      </div>
    )
  }
}

export default App;