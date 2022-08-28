import React, { FC } from 'react';

import styles from './CreateButton.module.scss';

type Props = {
  openCreateModal: () => void;
};

export const CreateButton: FC<Props> = ({ openCreateModal }) => {
  return (
    <button className={styles.createButton} onClick={openCreateModal}>
      +
    </button>
  );
};
