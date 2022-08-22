import React, { FC } from 'react';

import styles from './HelloPageContent.module.scss';

type Props = { page: string };
export const HelloPageContent: FC<Props> = ({ page }) => {
  return (
    <>
      <div>you are on the '{page}' page</div>

      <a className={styles.homeButton} href="/">
        Go Home
      </a>
    </>
  );
};
