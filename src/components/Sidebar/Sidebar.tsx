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
        <rect width="12" height="2" fill="#1BE38B" />
        <div className={styles.quotePerson}>Han Solo</div>
      </div>
    </div>
  );
};
