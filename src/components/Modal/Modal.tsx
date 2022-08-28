import React, { FC, useCallback } from 'react';

import { useUi } from '@common/context/UiContext/utils';
import { NewEventForm } from '@components/Forms/NewEventForm/NewEventForm';

import styles from './Modal.module.scss';

export const Modal: FC = () => {
  const { currentModal, setCurrentModal } = useUi();

  const handleCloseModal = useCallback(() => {
    setCurrentModal(undefined);
  }, [setCurrentModal]);

  return currentModal ? (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={handleCloseModal}>
        &#10005; Close
      </div>
      {currentModal === 'createEvent' && <NewEventForm />}
    </div>
  ) : null;
};
