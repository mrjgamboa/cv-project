import React, { Component } from 'react';
import styles from '../../styles/modules/cv-form/CVForm.module.css';
import CVOverview from './CVOverview';

class CVForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: {
        firstName: '',
        lastName: '',
        suffix: '',
        email: '',
        phoneNumber: '',
      },
      education: [], // add an id e.g. { id:random, name, etc. }
      experience: [], // add an id e.g. { id:random, name, etc. }
      data: {},
    };
  }

  handleChange = (e) => {
    const section = e.target.parentElement.parentElement.id;
    const name = e.target.name;
    const value = e.target.value;
    let sectionValue;

    if (section === 'contact') {
      sectionValue = this.state.contact;
    } else if (section === 'education') {
      sectionValue = this.state.education;
    }

    this.setState({
      ...this.state,
      [section]: {
        ...sectionValue,
        [name]: value,
      },
    });
  }

  render() {
    const { contact, data } = this.state;
    console.log(this.state.contact); // temporary console

    return (
      <div>
        <form 
          className={styles.CVForm}
          noValidate
        >
          <section id='contact'>
            <h2>Contact Information</h2>
            <hr />
            <div>
              <label htmlFor='firstName'>First name</label>
              <input 
                type='text' 
                name='firstName'
                id='firstName' 
                value={contact.firstName}
                onChange={this.handleChange}
                required
              />
              <label htmlFor='lastName'>Last name</label>
              <input 
                type='text' 
                name='lastName'
                id='lastName' 
                value={contact.lastName}
                onChange={this.handleChange}
                required
              />
              <label htmlFor='suffix'>Suffix</label>
              <input 
                type='text' 
                name='suffix'
                id='suffix' 
                value={contact.suffix}
                onChange={this.handleChange}
              />
              <label htmlFor='email'>Email</label>
              <input 
                type='email' 
                name='email'
                id='email'
                value={contact.email}
                onChange={this.handleChange}
                required
              />
              <label htmlFor='phoneNumber'>Phone number</label>
              <input 
                type='tel' 
                name='phoneNumber'
                id='phoneNumber'
                pattern='[0-9]{4}-[0-9]{3}-[0-9]{4}'
                value={contact.phoneNumber}
                onChange={this.handleChange}
                required
              />
              <small>Format: 9999-999-9999</small>
            </div>
          </section>
          <section id='education'>
            <h2>Education</h2>
            <hr />
          </section>
          <section id='experience'>
            <h2>Experience</h2>
            <hr />
          </section>
        </form>
        <CVOverview data={data}/>
      </div>
    );
  }
}

export default CVForm;
