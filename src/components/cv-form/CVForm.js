import React, { Component } from 'react';
import styles from '../../styles/modules/CVForm.module.css';
import GeneralSection from './GeneralSection';
import EducationalSection from './EducationalSection';
import PracticalSection from './PracticalSection';

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
      <div className={styles.CVForm}>
        <form>
          <GeneralSection />
          <EducationalSection />
          <PracticalSection />
        </form>
      </div>
    );
  }
}

export default CVForm;
