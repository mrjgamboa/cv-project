import React, { Component } from 'react';
import styles from '../../styles/modules/CVForm.module.css';

class CVForm extends Component {
  constructor() {
    super();

    this.state = {
      generalInfos: [],
      educationalExp: [],
      practicalExp: [],
    };
  }

  render() {
    return (
      <form 
        className={styles.CVForm}
        noValidate
      >
        <section>
          <h2>Contact Information</h2>
          <hr />
          <div>
            <label htmlFor='firstName'>First name</label>
            <input 
              type='text' 
              name='firstName'
              id='firstName' 
              required
            />
            <label htmlFor='lastName'>Last name</label>
            <input 
              type='text' 
              name='lastName'
              id='lastName' 
              required
            />
            <label htmlFor='suffix'>Suffix</label>
            <input 
              type='text' 
              name='suffix'
              id='suffix' 
            />
            <label htmlFor='email'>Email</label>
            <input 
              type='email' 
              name='email'
              id='email'
              required
            />
            <label htmlFor='phoneNumber'>Phone number</label>
            <input 
              type='tel' 
              name='phoneNumber'
              id='phoneNumber'
              pattern='[0-9]{4}-[0-9]{3}-[0-9]{4}'
              required
            />
            <small>Format: 9999-999-9999</small>
          </div>
        </section>
        <section className='EducationalSection'>
          <h2>Education</h2>
          <hr />
        </section>
        <section className='PracticalSection'>
          <h2>Experience</h2>
          <hr />
        </section>
      </form>
    );
  }
}

export default CVForm;
