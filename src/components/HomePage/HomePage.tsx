import React, { FC } from 'react';

import { Link } from '@dumbComponents/Link/Link';

import styles from './HomePage.module.scss';

type Props = {};

export const HomePage: FC<Props> = () => {
  return (
    <div className={styles.wrapper}>
      <div>Welcome to Eventio</div>

      <div className={styles.links}>
        <span>
          Already a member? <Link href="/sign-in">Sign In</Link>
        </span>
        |
        <span>
          Sign up for free <Link href="/sign-up">Sign Up</Link>
        </span>
      </div>
    </div>
  );
};
