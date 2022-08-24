import React, { FC } from 'react';

import { SignInForm } from '@components/Forms/SignInForm/SignInForm';
import { LoginOrSignupLink } from '@components/LoginOrSignupLink/LoginOrSignupLink';

import styles from './UserEntryPage.module.scss';

type Props = { page: string };

export const UserEntryPage: FC<Props> = ({ page }) => {
  console.log('hello');
  return (
    <div className={styles.userEntryWrapper}>
      <LoginOrSignupLink
        message="Don't have an account?"
        href="/login"
        linkText="Sign In"
      />
      <SignInForm />
    </div>
  );
};
