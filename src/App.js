import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import withState from 'recompose/withState';

const enhance = withState('clicked','setClicked',false);

const Calendar = enhance(({clicked,setClicked}) => 
  <div>
    <input type='text' onClick={() => setClicked(v=> !v)}/>
    <span style={{display:clicked?'':'none'}} >Bonjour</span>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Calendar></Calendar>
      </div>
    );
  }
}

export default App;
