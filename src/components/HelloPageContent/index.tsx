import Link from 'next/link';
import React, { FC } from 'react';

import styles from './HelloPageContent.module.scss';

type Props = { page: string };
export const HelloPageContent: FC<Props> = ({ page }) => {
  return (
    <>
      <div>you are on the {`'${page}'`} page</div>

      <Link className={styles.homeButton} href="/">
        Go Home
      </Link>
    </>
  );
};
