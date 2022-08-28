import React from 'react';

import styles from './NoEventsMessage.module.scss';

export const NoEventsMessage = () => {
  return (
    <div className={styles.wrapper}>SORRY: There are no events to show</div>
  );
};
