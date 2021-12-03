import React, { Component } from 'react';
import Header from './components/Header';
import './styles/App.css';



class App extends Component {
  constructor() {
    super();

    this.state = {
      //
    }
  }

  render() {
    return (
      <div className='App'>
        <Header title='CV Maker'/>
      </div>
    );
  }
}

export default App;
