import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/"><p>test</p></Route>
      </div>
    );
  }
}

export default App;