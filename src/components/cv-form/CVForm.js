import React, { Component } from 'react';
import styles from '../../styles/modules/CVForm.module.css';

class CVForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfos: [],
      educationalExp: [],
      practicalExp: [],
    };
  }

  render() {
    return (
      <div className={styles.CVForm}>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
      </div>
    );
  }
}

export default CVForm;
