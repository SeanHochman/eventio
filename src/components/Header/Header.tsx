import React, { FC } from 'react';

import styles from './Header.module.scss';
type Props = {};

export const Header: FC<Props> = () => {
  return <div className={styles.headerWrapper}>Header</div>;
};
