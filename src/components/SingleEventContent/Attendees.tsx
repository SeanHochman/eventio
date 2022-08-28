import React, { FC } from 'react';

import styles from './SingleEventContent.module.scss';

type Props = {
  attendeeList: string[];
};

export const Attendees: FC<Props> = ({ attendeeList }) => {
  return (
    <div className={styles.attendees}>
      Attendees
      <div className={styles.attendeeList}>
        {attendeeList.map((person) => {
          return (
            <span key={person} className={styles.attendeeName}>
              {person}
            </span>
          );
        })}
      </div>
    </div>
  );
};
