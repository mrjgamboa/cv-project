import React, { Component } from 'react';
import styles from '../styles/modules/Header.module.css';

class Header extends Component {
  render() {
    const { title } = this.props;

    return (
      <div className={styles.Header}>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default Header;
