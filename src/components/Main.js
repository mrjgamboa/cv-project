import React, { Component } from 'react';
import CVForm from './cv-form/CVForm';

class Main extends Component {

  render() {
    return (
      <div className='Main'>
        <CVForm />
        {/* should I make a preview component or just mix it inside
        CVForm.js? */}
      </div>
    );
  }
}

export default Main;
