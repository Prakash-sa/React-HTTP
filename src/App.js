import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Postlist from './http/Postfrom.js'

class App extends Component{
  render(){
    return(
      <div className="App">
        <Postlist/>
      </div>
    )
  }
}

export default App;
