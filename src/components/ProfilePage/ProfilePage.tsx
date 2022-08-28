import React, { FC } from 'react';

import { UserType } from '@common/types/user';

import styles from './ProfilePage.module.scss';

type Props = {
  userInfo?: UserType | null;
};

export const ProfilePage: FC<Props> = ({ userInfo }) => {
  // TODO: finish this page
  return (
    <div className={styles.wrapper}>
      Sorry <strong>{userInfo?.name || 'person'}</strong>, we have not gotten
      around to making this page yet. 😔
    </div>
  );
};
