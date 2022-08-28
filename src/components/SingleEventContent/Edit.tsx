import React, { FC } from 'react';

import { EventItemType } from '@dumbComponents/EventItem/EventItem';

import styles from './SingleEventContent.module.scss';

type Props = {
  event: EventItemType;
  handleDeleteEvent: any;
};

export const Edit: FC<Props> = ({ event }) => {
  return (
    <div className={styles.event}>Sorry, we have not gotten to this yet 😔</div>
  );
};
