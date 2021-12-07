import React, { Component } from 'react';

class GeneralSection extends Component {
  render() {
    return (
      <section>
        <h2>Contact Information</h2>
        <hr />
        <div>
          <label htmlFor='firstName'>First name</label>
          <input 
            type='text' 
            id='firstName' 
            required
          />
          <label htmlFor='lastName'>Last name</label>
          <input 
            type='text' 
            id='lastName' 
            required
          />
          <label htmlFor='suffix'>Suffix</label>
          <input 
            type='text' 
            id='suffix' 
          />
          <label htmlFor='email'>Email</label>
          <input 
            type='email' 
            id='email'
            required
          />
          <label htmlFor='phoneNumber'>Phone number</label>
          <input 
            type='tel' 
            id='phoneNumber'
            pattern='[0-9]{4}-[0-9]{3}-[0-9]{4}'
            required
            />
            <small>Format: 9999-999-9999</small>
        </div>
      </section>
    );
  }
}

export default GeneralSection;
