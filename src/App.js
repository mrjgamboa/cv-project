import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header title='CV M4ker'/>
        <Main />
        <Footer 
          creator='L4ck'
          link='https://github.com/mrjgamboa'
        />
      </div>
    );
  }
}

export default App;
