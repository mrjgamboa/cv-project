import React, { Component } from 'react';
import uniqid from "uniqid";
import styles from '../../styles/modules/cv-form/CVForm.module.css';
import CVOverview from './CVOverview';

class CVForm extends Component {
  constructor(props) {
    super(props);

    // delete this const
    const dummy = `Resume paper is a specific type of paper 
      that you use for your resume. Resume paper is thicker 
      than standard printing or copy paper and might be a different material 
      and color too. Use resume paper in the following scenarios`;
    this.createSummary = () => {
      return {
        id: uniqid(),
        summary: dummy,
      };
    };

    this.accomplishment = () => {
      return {
        id: uniqid(),
        sentence: '',
      };
    };

    // delete this const
    const dummy2 = [{ 
      id: uniqid(),
      sentence: 'accomplishment 1',
    },{
      id: uniqid(),
      sentence: 'accomplishment 2',
    }]

    this.createExperience = () => {
      return {
        id: uniqid(),
        jobTitle: 'Production Assistant',
        company: 'Clark Outsourcing',
        accomplishment: this.accomplishment(),
        accomplishments: [...dummy2],
        startDate: '2021-12-14',
        endDate: 'PRESENT',
      };
    };

    // delete this const
    const dummy3 = [{ 
      id: uniqid(),
      sentence: 'accomplishment educ 1',
    },{
      id: uniqid(),
      sentence: 'accomplishment educ 2',
    }];
    this.createEducation = () => {
      return {
        id: uniqid(),
        academicDegree: 'BS', // initials
        major: 'Information Technology', // e.g. Business Administration
        schoolName: 'Nueva Ecija University of Science and Technology',
        accomplishment: this.accomplishment(),
        accomplishments: [...dummy3], /* { id: uniqid(), text: '', }*/
        startDate: '2021-12-14', // year only e.g. 2014
        endDate: '2021-12-15',  // year only e.g. 2018
      };
    };

    const dummy4 = [{
      id: uniqid(),
      text: 'skill 1',
    },{
      id: uniqid(),
      text: 'skill 2',
    }];
    this.createSkill = () => {
      return {
        skill: {
          id: uniqid(),
          text: '',
        },
        skillList: [...dummy4],
      };
    };

    this.state = {
      data: {},
      preview: false,
      contact: {
        firstName: 'John',
        lastName: 'Doe',
        suffix: 'Jr.',
        email: 'x@gmail.com',
        phoneNumber: '9999-999-9999',
      },
      summary: [this.createSummary()],
      experience: [this.createExperience()],
      education: [this.createEducation()],
      skills: this.createSkill(),
    };

    this.setPreviewToFalse = this.setPreviewToFalse.bind(this);
  }

  setStateV1 = (section, sectionValue, name, value) => {
    // setState for object {} type section. e.g. contact
    let newValue = value;
    if (section === 'skills') {
      newValue = {
        ...sectionValue.skill,
        text: value,
      };
    }
    this.setState({
      ...this.state,
      [section]: {
        ...sectionValue,
        [name]: newValue,
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
    
    if (section === 'contact') {
      sectionValue = this.state.contact;
    } else if (section === 'summary') {
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

  checkValidity = (target) => {
    const valid = target.validity.valid;
    const tagged = target.classList.contains(styles.invalid);
    if (valid && tagged) {
      target.classList.toggle(styles.invalid);
    } else if (!valid && !tagged) {
      target.classList.toggle(styles.invalid);
    }
  }

  handleChange = (e) => {
    this.checkValidity(e.target);
    const arrayTypeSections = [
      'summary', 'experience', 'education',
    ];
    const section = e.target.parentElement.parentElement.id;
    const name = e.target.name;
    let value = e.target.value;

    if ((section === 'contact') || section === 'skills') {
      this.setStateV1(
        section, this.getSectionValue(section), name, value
      );
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

    sectionValue[index].accomplishments = 
      sectionValue[index].accomplishments
        .concat(sectionValue[index].accomplishment);

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

  addToSkills = () => {
    this.setState({
      ...this.state,
      skills: {
        skillList: this.state.skills.skillList
          .concat(this.state.skills.skill),
        skill: this.createSkill().skill,
      },
    });
  }

  setPreviewToFalse = () => {
    this.setState({
      ...this.state,
      preview: false,
    });
  }

  handleSubmit = () => {
    const formInputs = document.querySelectorAll('#cvM4kerForm input');
    let invalid = 0;
    let invalidInputs = [];

    formInputs.forEach((input) => {
      this.checkValidity(input);
      if (!input.validity.valid){
        invalid += 1;
        invalidInputs.push(input);
      }
    });

    if (invalid === 0) {
      this.setState({
        ...this.state,
        data: {
          contact: this.state.contact,
          summary: this.state.summary,
          experience: this.state.experience,
          education: this.state.education,
          skills: this.state.skills.skillList,
        },
        preview: true,
      });
    } else {
      invalidInputs[0].focus();
    }
  }

  render() {
    const { 
      summary, contact,experience, education, skills, preview, data,
    } = this.state;

    return (
      <div>
        {preview === false &&
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
              <h2>Summary</h2>
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
                        checked={exp.endDate === 'PRESENT'
                          ? true
                          : false
                        }
                        onChange={(e) => 
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
                    />
                    <button
                      type='button'
                      className={styles.addToList}
                      data-index={index}
                      data-section='experience'
                      disabled={exp.accomplishment.sentence
                        .trim().length > 0
                        ? false
                        : true
                      }
                      onClick={this.addToList}
                    >
                      Add To List
                    </button>
                    <details>
                      <summary>List of Accomplishments</summary>
                      {exp.accomplishments.length  > 0
                        ?
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
                        : <div>(empty)</div>
                      }
                    </details>
                    <button
                      type='button'
                      className={styles.delete}
                      data-index={index}
                      data-section='experience'
                      onClick={this.deleteOneSectionValue}
                    >
                      {experience.length === 1
                        ? 'Remove Experience'
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
                        checked={educ.endDate === 'PRESENT'
                          ? true
                          : false
                        }
                        onChange={(e) => 
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
                    />
                    <button
                      type='button'
                      className={styles.addToList}
                      data-index={index}
                      data-section='education'
                      disabled={educ.accomplishment.sentence
                        .trim().length > 0
                        ? false
                        : true
                      }
                      onClick={this.addToList}
                    >
                      Add To List
                    </button>
                    <details>
                      <summary>List of Accomplishments</summary>
                      {educ.accomplishments.length  > 0
                        ?
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
                        : <div>(empty)</div>
                      }
                    </details>
                    <button
                      type='button'
                      className={styles.delete}
                      data-index={index}
                      data-section='education'
                      onClick={this.deleteOneSectionValue}
                    >
                      {education.length === 1
                        ? 'Remove Education'
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
              <div>
                <label htmlFor='skill'>Skill</label>
                <input 
                  type='text' 
                  name='skill'
                  id='skill' 
                  value={skills.skill.text}
                  onChange={this.handleChange}
                />
                <button
                  type='button'
                  className={styles.addToList}
                  disabled={skills.skill.text.trim().length > 0
                    ? false
                    : true
                  }
                  onClick={this.addToSkills}
                >
                  Add Skill
                </button>
                <details>
                  <summary>List of Skills</summary>
                  {skills.skillList.length > 0
                    ?
                      <div 
                        className={styles.list}
                        id={`skillList`}
                      >
                        <ul>
                          {skills.skillList.map((item) => {
                            return (
                              <li key={item.id}>{item.text}</li>
                            );
                          })}
                        </ul>
                      </div>
                    : <div>(empty)</div>
                  }
                </details>
              </div>
            </section>
            {// if valid form 
              <button
                type='button'
                className={styles.submit}
                onClick={this.handleSubmit}
              >
                Create CV
              </button>
            }
          </form>
        }
        {preview === true &&
          <CVOverview 
            data={data}
            onClickBtn={this.setPreviewToFalse}
          />
        }
      </div>
    );
  }
}

export default CVForm;
