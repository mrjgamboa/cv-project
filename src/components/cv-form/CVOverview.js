import React, { Component } from 'react';
import styles from '../../styles/modules/cv-form/CVOverview.module.css';

class CVOverview extends Component {
  render() {
    const { data, onClickBtn } = this.props;

    return (
      <div className={styles.CVOverview}>
        <h2>firstName lastName suffix</h2>
        <button onClick={onClickBtn}>Edit</button>
      </div>
    );
  }
}

export default CVOverview;
