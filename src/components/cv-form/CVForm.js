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

    this.accomplishment = () => {
      return {
        id: uniqid(),
        sentence: '',
      };
    };

    this.createExperience = () => {
      return {
        id: uniqid(),
        jobTitle: '',
        company: '',
        accomplishment: { // this value will be push to accomplishments
          id: uniqid(),
          sentence: '',
        },
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
        accomplishment: {
          id: uniqid(),
          sentence: '',
        },
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
    // setState for object {} type section. e.g. contact
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
    const newSectionValue = [ ...sectionValue ];
    let newValue = value;
    let objectIndex = objIndex;

    if (objectIndex == null) {
      const targetObject = (obj) => obj.id === e.target.parentElement.id; 
      objectIndex = sectionValue.findIndex(targetObject);
    }

    if (name === 'accomplishment') {
      newValue = {
        ...newSectionValue[objectIndex].accomplishment,
        sentence: value,
      };
    }

    newSectionValue[objectIndex] = {
      ...newSectionValue[objectIndex],
      [name]: newValue,
    };

    this.setState({
      ...this.state,
      [section]: [
        ...newSectionValue,
      ],
    });
  }

  getSectionValue = (section) => {
    let sectionValue;
    if (section === 'summary') {
      sectionValue = this.state.summary;
    } else if (section === 'experience') {
      sectionValue = this.state.experience;
    } else if (section === 'education') {
      sectionValue = this.state.education;
    } else if (section === 'skills') {
      sectionValue = this.state.skills;
    }
    return sectionValue;
  }

  handleChange = (e) => {
    const arrayTypeSections = [
      'summary', 'experience', 'education', 'skills',
    ];
    const section = e.target.parentElement.parentElement.id;
    const name = e.target.name;
    let value = e.target.value;

    if (section === 'contact') {
      this.setStateV1(section, this.state.contact, name, value);
    } else if (arrayTypeSections.includes(section)) {
      this.setStateV2(
        section, this.getSectionValue(section), name, value, e
      );
    }
  }

  addMoreSectionValue = (e) => {
    const section = e.target.getAttribute('data-section');
    const sectionValue = this.getSectionValue(section);
    let newSectionEmptyValue;

    if (section === 'summary') {
      newSectionEmptyValue = this.createSummary();
    } else if (section === 'experience') {
      newSectionEmptyValue = this.createExperience();
    } else if (section === 'education') {
      newSectionEmptyValue = this.createEducation();
    } else if (section === 'skills') {
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
    const sectionValue = this.getSectionValue(section);
    const index = e.target.getAttribute('data-index');

    sectionValue.splice(index, 1);
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

  addToList = (e) => {
    const index = e.target.getAttribute('data-index');
    const section = e.target.getAttribute('data-section');
    const sectionValue = this.getSectionValue(section);
    
    if (!sectionValue[index].accomplishment
      .sentence.trim().length) { 
      return; 
    }

    sectionValue[index].accomplishments = [
      ...sectionValue[index].accomplishments,
      sectionValue[index].accomplishment
    ];

    sectionValue[index].accomplishment = {
      ...this.accomplishment(),
    };

    
    this.setState({
      ...this.state,
      [section]: [
        ...sectionValue,
      ],
    });
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
                      id={`expCheckboxEndDAte${num}`}
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
                    <label htmlFor={`expCheckboxEndDAte${num}`}>
                      PRESENT
                    </label>
                  </small>
                  <label htmlFor={`expAccomplishment${num}`}>
                    Accomplishment
                  </label>
                  <input
                    type='text'
                    name='accomplishment'
                    id={`expAccomplishment${num}`}
                    value={exp.accomplishment.sentence}
                    // need new function, replace handleChange
                    onChange={this.handleChange}
                    required
                  />
                  <button
                    type='button'
                    className={styles.addToList}
                    data-index={index}
                    data-section='experience'
                    onClick={this.addToList}
                  >
                    Add To List
                  </button>
                  {exp.accomplishments.length > 0 &&
                    <>
                      <label htmlFor={`expList${num}`}>
                        List of Accomplishments
                      </label>
                      <div 
                        className={styles.list}
                        id={`expList${num}`}
                      >
                        <ul>
                          {exp.accomplishments.map((item) => {
                            return (
                              <li key={item.id}>{item.sentence}</li>
                            );
                          })}
                        </ul>
                      </div>
                    </>
                  }
                  <button
                    type='button'
                    className={styles.delete}
                    data-index={index}
                    data-section='experience'
                    onClick={this.deleteOneSectionValue}
                  >
                    {experience.length === 1
                      ? 'No Experience'
                      : `Delete #${num}`
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
            {education.map((educ, index) => {
              const num = index + 1;
              return (
                <div 
                  key={educ.id} 
                  id={educ.id}
                >
                  {education.length > 1 &&
                    <span>{`#${num}`}</span>
                  }
                  <label htmlFor={`academicDegree${num}`}>
                    Academic Degree
                  </label>
                  <input 
                    type='text' 
                    name='academicDegree'
                    id={`academicDegree${num}`}
                    value={educ.academicDegree}
                    onChange={this.handleChange}
                  />
                  <label htmlFor={`major${num}`}>Major</label>
                  <input 
                    type='text' 
                    name='major'
                    id={`major${num}`}
                    value={educ.major}
                    onChange={this.handleChange}
                  />
                  <label htmlFor={`schoolName${num}`}>
                    School Name
                  </label>
                  <input 
                    type='text' 
                    name='schoolName'
                    id={`schoolName${num}`}
                    value={educ.schoolName}
                    onChange={this.handleChange}
                    required
                  />
                  <label htmlFor={`educStartDate${num}`}>
                    Start Date
                  </label>
                  <input
                    type='date' 
                    name='startDate'
                    id={`educStartDate${num}`}
                    value={educ.startDate}
                    onChange={this.handleChange}
                    required
                  />
                  <label htmlFor={`educEndDAte${num}`}>
                    End Date
                  </label>
                  {educ.endDate !== 'PRESENT' &&
                    <input
                      type='date' 
                      name='endDate'
                      id={`educEndDAte${num}`}
                      value={educ.endDate}
                      onChange={this.handleChange}
                      required
                    />
                  }
                  <small>
                    <input 
                      type='checkbox' 
                      id={`educCheckboxEndDAte${num}`}
                      onClick={(e) => 
                        this.handleCheckbox(
                          'education',
                          this.state.education,
                          'endDate',
                          'PRESENT',
                          e,
                          index,
                        )
                      }
                    />
                    <label htmlFor={`educCheckboxEndDAte${num}`}>
                      PRESENT
                    </label>
                  </small>
                  <label htmlFor={`educAccomplishment${num}`}>
                    Accomplishment
                  </label>
                  <input
                    type='text'
                    name='accomplishment'
                    id={`educAccomplishment${num}`}
                    value={educ.accomplishment.sentence}
                    // need new function, replace handleChange
                    onChange={this.handleChange}
                    required
                  />
                  <button
                    type='button'
                    className={styles.addToList}
                    data-index={index}
                    data-section='education'
                    onClick={this.addToList}
                  >
                    Add To List
                  </button>
                  {educ.accomplishments.length > 0 &&
                    <>
                      <label htmlFor={`educList${num}`}>
                        List of Accomplishments
                      </label>
                      <div 
                        className={styles.list}
                        id={`educList${num}`}
                      >
                        <ul>
                          {educ.accomplishments.map((item) => {
                            return (
                              <li key={item.id}>{item.sentence}</li>
                            );
                          })}
                        </ul>
                      </div>
                    </>
                  }
                  <button
                    type='button'
                    className={styles.delete}
                    data-index={index}
                    data-section='education'
                    onClick={this.deleteOneSectionValue}
                  >
                    {education.length === 1
                      ? 'No Education'
                      : `Delete #${num}`
                    }
                  </button>
                  {education.length > 1 &&
                    <hr className={styles.hrv2}/>
                  }
                </div>
              );
            })}
            <button 
              type='button'
              data-section='education'
              onClick={this.addMoreSectionValue}
            >
              {education.length === 0
                ? 'Add Education'
                : 'Add More'
              }
            </button>
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
