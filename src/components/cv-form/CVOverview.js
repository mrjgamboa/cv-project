import React, { Component } from 'react';
import styles from '../../styles/modules/cv-form/CVOverview.module.css';

class CVOverview extends Component {
  render() {
    const { data, onClickBtn } = this.props;
    const { 
      contact, summary, experience, education, skills
    } = data;

    return (
      <div className={styles.CVOverview}>
        <div className={styles.contact}>
          <h1>
            {contact.firstName}&nbsp;
            {contact.lastName}&nbsp;
            {contact.suffix &&
              contact.suffix
            }
          </h1>
          <p>
            <strong>Phone</strong>&nbsp;
            {contact.phoneNumber}
          </p>
          <p>
            <strong>Email</strong>&nbsp;
            {contact.email}
          </p>
        </div>
        {summary.length === 1 &&
          <p className={styles.summary}>
            {summary[0].summary}
          </p>
        }
        {experience.length > 0 &&
          <div className={styles.experience}>
            {/* resume here */}
          </div>
        }
        <button onClick={onClickBtn}>Edit</button>
      </div>
    );
  }
}

export default CVOverview;
