import React, { Component } from 'react';
import 'normalize.css';
import './styles/App.css';
import Header from './components/Header';



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
