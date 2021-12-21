import React, { Component } from 'react';
import styles from '../../styles/modules/cv-form/CVOverview.module.css';

class CVOverview extends Component {
  render() {
    const { data, onClickBtn } = this.props;
    const { 
      contact, summary, experience, education, skills
    } = data;
    const nbsp = String.fromCharCode(160);

    const stringMinus3Char = (date) => date.substring(0, date.length-3);
    const processEndDate = (date) =>
      (date === 'PRESENT') ? 'present' : stringMinus3Char(date);
    
    const dateDiv = (item) => {
      return (
        <div>
          <p>
            {stringMinus3Char(item.startDate)}
            &nbsp;-&nbsp;
            {processEndDate(item.endDate)}
          </p>
        </div>
      );
    };

    const accomplishmentsUl = (array) => {
      if (array.length > 0) {
        return (
          <ul>
            {array.map((list) => {
              return (
                <li key={list.id}>
                  {list.sentence}
                </li >
              );
            })}
          </ul>
        );
      }
    }

    return (
      <div className={styles.CVOverview}>
        <section className={styles.contact}>
          <h1>
            {contact.firstName}&nbsp;
            {contact.lastName}&nbsp;
            {(contact.suffix) &&
              contact.suffix
            }
          </h1>
          <div>
            <p>
              <strong>Phone</strong>&nbsp;
              {contact.phoneNumber}
            </p>
            <p>
              <strong>Email</strong>&nbsp;
              {contact.email}
            </p>
          </div>
        </section>
        {(summary.length === 1) &&
          <section className={styles.summary}>
            <p>
              {summary[0].summary}
            </p>
          </section>
        }
        {(experience.length > 0) &&
          <section className={styles.experience}>
            <h2>Experience</h2>
            {experience.map((exp) => {
              return (
                <div 
                  className={styles.sectionChildDiv}
                  key={exp.id}
                >
                  {dateDiv(exp)}
                  <div>
                    <p><strong>{exp.jobTitle}</strong></p>
                    <p><i>{exp.company}</i></p>
                    {accomplishmentsUl(exp.accomplishments)}
                  </div>
                </div>
              );
            })}
          </section>
        }
        {(education.length > 0) &&
          <section>
            <h2>Education</h2>
            {education.map((educ) => {
              return (
                <div 
                  className={styles.sectionChildDiv}
                  key={educ.id}
                >
                  {dateDiv(educ)}
                  <div>
                    <p>
                      <strong>
                        {(educ.academicDegree) &&
                          `${educ.academicDegree},${nbsp}`
                        }
                        {(educ.major) &&
                          `${educ.major},${nbsp}`
                        }
                        {educ.schoolName}
                      </strong>
                    </p>
                    {accomplishmentsUl(educ.accomplishments)}
                  </div>
                </div>
              );
            })}
          </section>
        }
        {/* remove the bullet of skills section? */}
        {(skills.length > 0) &&
          <section>
            <h2>Skills</h2>
            <ul>
              {skills.map((list) => {
                return (
                  <li key={list.id}>
                    {list.text}
                  </li >
                );
              })}
            </ul>
          </section>
        }
        <button onClick={onClickBtn}>Edit</button>
      </div>
    );
  }
}

export default CVOverview;
