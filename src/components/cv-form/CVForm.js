import React, { Component } from 'react';
import uniqid from "uniqid";
import styles from '../../styles/modules/cv-form/CVForm.module.css';
import CVOverview from './CVOverview';

class CVForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      summary: [{
        id: uniqid(),
        text: '',
      }],
      contact: {
        firstName: '',
        lastName: '',
        suffix: '',
        email: '',
        phoneNumber: '',
      },
      experience: [{ // add an id e.g. { id:random, name, etc. } uniqid?
        id: uniqid(),
        jobTitle: '',
        company: '',
        accomplishments: [], /* { id: uniqid(), text: '', }*/
        startDate: '', // year-month e.g. 2020-08
        endDate: '', // year-month e.g. 2020-08
      }],
      education: [{ // add an id e.g. { id:random, name, etc. } uniqid?
        id: uniqid(),
        academicDegree: '', // BA(bachelor of arts), BS(science), or BFA(fine arts)
        major: '', // e.g. Business Administration
        schoolName: '',
        accomplishments: [], /* { id: uniqid(), text: '', }*/
        startDate: '', // year only e.g. 2014
        endDate: '',  // year only e.g. 2018
      }],
      skills: [{
        id: uniqid(),
        text: '',
      }],
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

      this.setState({
        ...this.state,
        [section]: {
          ...sectionValue,
          [name]: value,
        },
      });
    } else if (section === 'experience') {
      sectionValue = this.state.experience;
    } else {
      sectionValue = this.state.education;
    }
  }

  removeSummary = () => {
    this.setState({
      ...this.state,
      summary: [],
    });
  }

  addSummary = () => {
    this.setState({
      ...this.state,
      summary: [{
        id: uniqid(),
        text: '',
      }],
    });
  }

  render() {
    const { 
      summary, contact,experience, education, data, skills,
    } = this.state;

    console.log(this.state.contact); // temporary console
    console.log(experience.length, education.length) // temporary console

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
          <section id='summary'>
            <h2>Summary (optional)</h2>
            <hr />
            {summary.map((content, index) => {
              return (
                <div key='content.id'>
                  <textarea /> { /* or input that can grow */}
                  <button
                    type='button'
                    className={styles.delete}
                    onClick={this.removeSummary}
                  >Remove Summary</button>
                </div>
              );
            })}
            {summary.length === 0 &&
              <button
                type='button'
                onClick={this.addSummary}
              >Add Summary</button>
            }
          </section>
          <section id='experience'>
            <h2>Experience</h2>
            <hr />
            {console.log(experience)} {/*delete this*/}
            {experience.map((exp, index) => {
              return (
                <div key={exp.id}>
                  {/*other inputs*/}
                  {index > 0 &&
                    <button
                      type='button'
                      className={styles.delete}
                    >Delete</button>
                  }
                </div>
              );
            })}
            {/* experience.length > 0 && // change to 1 later, inside div
              <button
              type='button'
              className={styles.delete}
              Delete</button>
              */
            }
            <button type='button'>Add More</button>
          </section>
          <section id='education'>
            <h2>Education</h2>
            <hr />
            {
              //foreach
              //div
            }
          </section>
          <section id='skills'>
            <h2>Skills</h2>
            <hr />
            {
              //foreach
              //div
            }
          </section>
        </form>
        <CVOverview data={data}/>
      </div>
    );
  }
}

export default CVForm;
