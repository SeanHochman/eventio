import React, { FC } from 'react';

import styles from './Sidebar.module.scss';

type Props = {};

export const Sidebar: FC<Props> = () => {
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.quoteBlock}>
        <div className={styles.quote}>
          {`"${"Great, kid, Don't get cocky."}"`}
        </div>
        <span className={styles.rect} />
        <div className={styles.quotePerson}>Han Solo</div>
      </div>
    </div>
  );
};
