import React, { Component } from 'react';
import { Button } from '@material-ui/core';

import styles from './styles.css';

export default class MyApp extends Component {
  render() {
    const { text } = this.props;

    return (
      <div className={styles.test}>
        My App is
        <Button variant="contained" color="secondary">{text}</Button>
      </div>
    );
  }
}
