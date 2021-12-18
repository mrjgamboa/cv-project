import React, { Component } from 'react';

const styles = {
  footer: {
    backgroundColor: 'var(--ufoGreen)',
    padding: '1rem 1.5rem 1.75rem 1.5rem',
    textAlign: 'right',
  },
  a: {
    color: 'var(--onyx)',
  },
};

class Footer extends Component {
  render() {
    const { creator, link } = this.props;

    return (
      <footer style={styles.footer}>
        <p>
          Created by:&nbsp;
          <a 
            style={styles.a}
            target='_blank'
            rel='noopener noreferrer'
            href={link}
          >
            {creator}
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
