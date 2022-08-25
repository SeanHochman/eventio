import React from 'react';

import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.spinner}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
