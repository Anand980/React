import React, {Component} from 'react'
import { render } from '@testing-library/react'

class MemeGenerator extends Component{
    constructor()
    {
        super()
        this.state = {topTxt:"", btmTxt:"", randImg:"https://i.imgflip.com/1bij.jpg", allMemeImgs: []}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response=>response.json())
        .then(response => {
            const {memes} = response.data
            console.log(memes)
            this.setState({ allMemeImgs : memes })
        })
        
      }

      handleChange(event){
            const {name, value} = event.target
            if(name==="topText"){
                this.setState({topTxt: value  })  
            }
            else{
                this.setState({ btmTxt : value  })
            }
               
      }

      handleSubmit(event){
          event.preventDefault()
          const randNum = Math.floor(Math.random(1,100) * this.state.allMemeImgs.length)
          const randMemeImg = this.state.allMemeImgs[randNum].url
          this.setState({randImg:randMemeImg})
      }
    
    render(){
        return(
            <div className="imgcontainer">
                <form onSubmit={this.handleSubmit}>
                    
                <input 
                    type="text" 
                    name="topText" 
                    placeholder="Enter top text"
                    value={this.state.topTxt} 
                    onChange={this.handleChange}
                />
                <input 
                    type="text" 
                    name="bottomText" 
                    placeholder="Enter bottom text" 
                    value={this.state.btmTxt} 
                    onChange={this.handleChange}
                />  
                <button>Gen</button>
                </form>
                <br />
                <div>
                    <img src={this.state.randImg} alt=""/>
                    <h2 className="topcentered">{this.state.topTxt}</h2>
                    <h2 className="btmcentered">{this.state.btmTxt}</h2>
                    
                </div>
                
            </div>
        )
    }
}

export default MemeGenerator