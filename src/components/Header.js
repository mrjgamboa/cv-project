import React, { Component } from 'react';
import styles from '../styles/modules/Header.module.css';

class Header extends Component {
  render() {
    const { title } = this.props;

    return <h1 className={styles.Header}>{title}</h1>;
  }
}

export default Header;
