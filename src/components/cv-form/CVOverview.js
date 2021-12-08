import React, { Component } from 'react';
import styles from '../../styles/modules/cv-form/CVOverview.module.css';

class CVOverview extends Component {
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    console.log(this.props.data);
  
    return (
      <div className={styles.CVOverview}>

      </div>
    );
  }
}

export default CVOverview;
