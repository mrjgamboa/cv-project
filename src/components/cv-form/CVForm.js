import React, { Component } from 'react';
import uniqid from "uniqid";
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
      summary: [{
        id: uniqid(),
        summary: '',
      }],
      experience: [{
        id: uniqid(),
        jobTitle: '',
        company: '',
        accomplishments: [], /* { id: uniqid(), text: '', }*/
        startDate: '', // year-month e.g. 2020-08 on preview
          // str = str.substring(0, str.length-3);
        endDate: '', // year-month e.g. 2020-08
      }],
      education: [{
        id: uniqid(),
        academicDegree: '', // initials
        major: '', // e.g. Business Administration
        schoolName: '',
        accomplishments: [], /* { id: uniqid(), text: '', }*/
        startDate: '', // year only e.g. 2014
        endDate: '',  // year only e.g. 2018
      }],
      skills: [{
        id: uniqid(),
        skill: '',
      }],
      data: {},
    };
  }

  // setState for object type section. e.g. contact
  setStateV1 = (section, sectionValue, name, value) => {
    this.setState({
      ...this.state,
      [section]: {
        ...sectionValue,
        [name]: value,
      },
    });
  }

  // setState for array type section. e.g. summary, experience
  setStateV2 = (e, section, sectionValue, name, value) => {
    const targetObject = (obj) => obj.id === e.target.parentElement.id; 

    const objectIndex = sectionValue.findIndex(targetObject);
    const newSectionValue = [ ...sectionValue ];
    newSectionValue[objectIndex] = {
      ...newSectionValue[objectIndex],
      [name]: value,
    };

    this.setState({
      ...this.state,
      [section]: [
        ...newSectionValue,
      ],
    });
  }

  handleChange = (e) => {
    const section = e.target.parentElement.parentElement.id;
    const name = e.target.name;
    let value = e.target.value;

    if (section === 'contact') {
      this.setStateV1(section, this.state.contact, name, value);
    } else if (section === 'summary') {
      this.setStateV2(e, section, this.state.summary, name, value);
    } else if (section === 'experience') {
      this.setStateV2(e, section, this.state.experience, name, value);
    } else if (section === 'education') {
      this.setStateV2(e, section, this.state.education, name, value);
    } else {
      this.setStateV2(e, section, this.state.skills, name, value);
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

  handleCheckbox = (e, index, section, sectionValue, name, value) => {
    console.log(
      e.target.checked, section, sectionValue, name, value
    )
    if (e.target.checked) {

    }
  }

  render() {
    const { 
      summary, contact,experience, education, skills, data,
    } = this.state;

    console.log(this.state); // temporary console

    return (
      <div>
        <form 
          className={styles.CVForm}
          id='cvM4kerForm'
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
                <div key={content.id} id={content.id}>
                  <textarea 
                    form='cvM4kerForm'
                    name='summary'
                    value={content.summary}
                    onChange={this.handleChange}
                  ></textarea>
                  <button
                    type='button'
                    className={styles.delete}
                    onClick={
                      () => {
                        const textarea = document
                          .querySelector(`#${content.id} > textarea`);
                        if (textarea.value.length > 60) {
                          if (window.confirm('Continue to remove summary?') 
                            === true) {
                            this.removeSummary();
                          }
                        } else {
                          this.removeSummary();
                        }
                      }
                    }
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
            {experience.map((exp, index) => {
              const num = index + 1;
              return (
                <div 
                  key={exp.id} 
                  id={exp.id}
                >
                  <label htmlFor={`jobTitle${num}`}>Job Title</label>
                  <input 
                    type='text' 
                    name='jobTitle'
                    id={`jobTitle${num}`}
                    value={exp.jobTitle}
                    onChange={this.handleChange}
                    required
                  />
                  <label htmlFor={`company${num}`}>Company</label>
                  <input 
                    type='text' 
                    name='company'
                    id={`company${num}`}
                    value={exp.company}
                    onChange={this.handleChange}
                    required
                  />
                  <label htmlFor={`expStartDAte${num}`}>Start Date</label>
                  <input
                    type='date' 
                    name='startDate'
                    id={`expStartDAte${num}`}
                    value={exp.startDate}
                    onChange={this.handleChange}
                    required
                  />
                  <label htmlFor={`expEndDAte${num}`}>End Date</label>
                  {exp.endDate !== 'PRESENT' &&
                    <input
                      type='date' 
                      name='endDate'
                      id={`expEndDAte${num}`}
                      value={exp.endDate}
                      onChange={this.handleChange}
                      required
                    />
                  }
                  <small>
                    <input 
                      type='checkbox' 
                      onClick={(e) => 
                        this.handleCheckbox(
                          e,
                          index,
                          'experience',
                          this.state.experience,
                          'endDate',
                          'PRESENT'
                        )
                      }
                    />
                    <label htmlFor={`checkboxEndDAte${num}`}>PRESENT</label>
                  </small>
                  {index > 0 &&
                    <button
                    type='button'
                    className={styles.delete}
                    >Delete</button> // when deleting use button parent id
                  }
                  {experience.length > 1 &&
                    <hr className={styles.hrv2}/>
                  }
                </div>
              );
            })}
            {experience.length === 1
              ? <button 
                  type='button'
                  className={styles.buttonExtraMarginTop}
                >Add More</button>
              : <button type='button'>Add More</button>
            }
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
