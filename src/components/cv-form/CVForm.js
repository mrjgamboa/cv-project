import React, { Component } from 'react';
import uniqid from "uniqid";
import styles from '../../styles/modules/cv-form/CVForm.module.css';
import CVOverview from './CVOverview';

class CVForm extends Component {
  constructor(props) {
    super(props);

    this.createSummary = () => {
      return {
        id: uniqid(),
        summary: '',
      };
    };

    this.createExperience = () => {
      return {
        id: uniqid(),
        jobTitle: '',
        company: '',
        accomplishments: [], /* { id: uniqid(), text: '', }*/
        startDate: '', // year-month e.g. 2020-08 on preview
          // str = str.substring(0, str.length-3);
        endDate: '', // year-month e.g. 2020-08
      };
    };

    this.createEducation = () => {
      return {
        id: uniqid(),
        academicDegree: '', // initials
        major: '', // e.g. Business Administration
        schoolName: '',
        accomplishments: [], /* { id: uniqid(), text: '', }*/
        startDate: '', // year only e.g. 2014
        endDate: '',  // year only e.g. 2018
      };
    };

    this.createSkill = () => {
      return {
        id: uniqid(),
        skill: '',
      };
    };

    this.state = {
      data: {},
      contact: {
        firstName: '',
        lastName: '',
        suffix: '',
        email: '',
        phoneNumber: '',
      },
      summary: [this.createSummary()],
      experience: [this.createExperience()],
      education: [this.createEducation()],
      skills: [this.createSkill()],
    };
  }

  setStateV1 = (section, sectionValue, name, value) => {
    // setState for object type section. e.g. contact
    this.setState({
      ...this.state,
      [section]: {
        ...sectionValue,
        [name]: value,
      },
    });
  }

  setStateV2 = (section, sectionValue, name, value, e, objIndex) => {
    // setState for array type section. e.g. summary, experience
    let objectIndex = objIndex;
    if (objectIndex == null) {
      const targetObject = (obj) => obj.id === e.target.parentElement.id; 
      objectIndex = sectionValue.findIndex(targetObject);
    }

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
      this.setStateV2(section, this.state.summary, name, value, e);
    } else if (section === 'experience') {
      this.setStateV2(section, this.state.experience, name, value, e);
    } else if (section === 'education') {
      this.setStateV2(section, this.state.education, name, value, e);
    } else if (section === 'skills') {
      this.setStateV2(section, this.state.skills, name, value, e);
    }
  }

  addMoreSectionValue = (e) => {
    const section = e.target.getAttribute('data-section');
    let newSectionEmptyValue;
    let sectionValue;

    if (section === 'summary') {
      sectionValue = this.state.summary;
      newSectionEmptyValue = this.createSummary();
    } else if (section === 'experience') {
      sectionValue = this.state.experience;
      newSectionEmptyValue = this.createExperience();
    } else if (section === 'education') {
      sectionValue = this.state.education;
      newSectionEmptyValue = this.createEducation();
    } else if (section === 'skills') {
      sectionValue = this.state.skills;
      newSectionEmptyValue = this.createSkill();
    }

    this.setState({
      ...this.state,
      [section]: [
        ...sectionValue,
        newSectionEmptyValue,
      ]
    });
  }

  deleteOneSectionValue = (e) => {
    const section = e.target.getAttribute('data-section');
    const index = e.target.getAttribute('data-index');
    let sectionValue;
    // resume here
    if (section === 'summary') {
      sectionValue = this.state.summary;
    } else if (section === 'experience') {
      sectionValue = this.state.experience;
    } else if (section === 'education') {
      sectionValue = this.state.education;
    } else if (section === 'skills') {
      sectionValue = this.state.skills;
    }

    sectionValue.splice(index, 1);
    console.log(sectionValue)
    this.setState({
      ...this.state,
      [section]: [
        ...sectionValue,
      ],
    });
  }

  handleCheckbox = (section, sectionValue, name, value, e, index) => {
    if (e.target.checked) {
      this.setStateV2(section, sectionValue, name, value, e, index);
    } else {
      this.setStateV2(section, sectionValue, name, '', e, index);
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
                    data-index={index}
                    data-section='summary'
                    onClick={
                      (e) => {
                        if (content.summary.length > 60) {
                          if (window.confirm('Continue to remove summary?') 
                            === true) {
                            this.deleteOneSectionValue(e);
                          }
                        } else {
                          this.deleteOneSectionValue(e);
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
                data-section='summary'
                onClick={this.addMoreSectionValue}
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
                  {experience.length > 1 &&
                    <span>{`#${num}`}</span>
                  }
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
                          'experience',
                          this.state.experience,
                          'endDate',
                          'PRESENT',
                          e,
                          index,
                        )
                      }
                    />
                    <label htmlFor={`checkboxEndDAte${num}`}>PRESENT</label>
                  </small>
                  <button
                    type='button'
                    className={styles.delete}
                    data-index={index}
                    data-section='experience'
                    onClick={this.deleteOneSectionValue}
                  >
                    {experience.length === 1
                      ? 'No Experience'
                      : 'Delete'
                    }
                  </button>
                  {experience.length > 1 &&
                    <hr className={styles.hrv2}/>
                  }
                </div>
              );
            })}
            <button 
              type='button'
              data-section='experience'
              onClick={this.addMoreSectionValue}
            >
              {experience.length === 0
                ? 'Add Experience'
                : 'Add More'
              }
            </button>
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
