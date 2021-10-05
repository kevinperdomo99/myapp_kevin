import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor (props)  {
     super(props)

    this.state={
        color:"pink"
    }
    this.cambiarColor= this.cambiarColor.bind(this);

    }
    
    cambiarColor(){
      if(this.state.color == "pink"){
        this.setState({color:"orange"})
      }else{
        this.setState({color:"pink"})
      }
     
    }

  





  render(){ 
    return(
      <div className="App">
        <button onClick={this.cambiarColor} style={{backgroundColor: this.state.color}}>
          Click Aquí  
        </button> 


      </div>
    )
    
    
  }  
}

export default App;
