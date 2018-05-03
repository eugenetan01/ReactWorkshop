import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumberInput from './NumberInput.js';
import _ from 'lodash';

class App extends Component {

  state = {
    result: null,
    errorMessages: []
  }

  addition = (x,y) => {
    if(y != null && y!==undefined){
       return x+y;
    }else{
       return x;
    }
  }

  calculate = () =>{
    const {first, second} = this.state;
    //const first  = this.state.first;
    //const second = this.state.second;
    //above line shortens the 2 const statements
    this.setState({
        result: first + second
    })
  }

  handleErrorMessage = (name, message) => {
    const errorMessage = {name, message}
    if(!_.some(this.state.errorMessages, (message) => {return message.name === name})){
      this.setState({
        errorMessages: _.concat(this.state.errorMessages, errorMessage)
      })
    }
  }

  removeMessage = (name) => {
    const newList = _.reject(this.state.errorMessages, ['name', name])
    this.setState({errorMessages: newList})
  }

  handleChange = (name, value) => {
    this.setState({
        [name]: value
    }) //parseInt(target.value)})
  }

  UNSAFE_componentWillUpdate(nextProps, nextState)
  {
    // only update when result is changed.
  }

  render() {
    return (
      <div className = "App">
        <NumberInput name = "first"
            displayName = "First Input Box"
            handleErrorMessage = {this.handleErrorMessage}
            removeMessage = {this.removeMessage}
            handleChange={this.handleChange}/>
        <NumberInput name = "second"
            displayName = "Second Input Box"
            handleErrorMessage = {this.handleErrorMessage}
            removeMessage = {this.removeMessage}
            handleChange={this.handleChange}/>

        <button onClick={this.calculate}>Calculate</button>
        <div className = "result">Result: {this.state.result && this.state.result}</div>
        {
            this.state.errorMessages.map((message)=>{
                return(
                  <div key = {message.name} className="errorMessage">{message.message}</div>
                )
            })
        }
      </div>
    );
  }
}

export default App;
