import React, { FC } from 'react';

import styles from './FormHeader.module.scss';

type Props = { title: string; subtitle?: string };

export const FormHeader: FC<Props> = ({ title, subtitle }) => {
  return (
    <div className={styles.formHeaderWrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
};
