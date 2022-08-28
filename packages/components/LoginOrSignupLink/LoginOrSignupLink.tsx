import Link from 'next/link';
import React, { ElementType, FC } from 'react';

import styles from './LoginOrSignupLink.module.scss';

type Props = {
  message: string;
  linkText: string;
  href: string;
  as?: ElementType;
};

export const LoginOrSignupLink: FC<Props> = ({ message, linkText, href }) => {
  return (
    <span className={styles.wrapper}>
      <span className={styles.message}>{message} </span>
      <span className={styles.link}>
        <Link href={href}>{linkText}</Link>
      </span>
    </span>
  );
};
