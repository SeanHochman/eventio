import React, { FC } from 'react';

import SvgLittleMan from '@common/svgs/littleMan';
import { Button } from '@dumbComponents/Button/Button';

import styles from './EventItem.module.scss';

export type EventItemType = {
  date: string;
  title: string;
  description: string;
  attendees: string;
  ownerName: string;
  isJoined: boolean;
  isUserEvent?: boolean;
  href: string;
};

export const EventItem: FC<EventItemType> = ({
  date,
  title,
  description,
  attendees,
  ownerName,
  isJoined,
  isUserEvent,
  href,
}) => {
  console.log(date);
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.date}>{date}</div>
      <div className={styles.title}>
        <div>{title}</div>
        <div className={styles.owner}>{ownerName}</div>
      </div>

      <div className={styles.description}>{description}</div>
      <span className={styles.foot}>
        <div className={styles.attendees}>
          <SvgLittleMan />
          {attendees}
        </div>
        <Button
          type={isJoined ? 'secondary' : 'primary'}
          size="small"
          text={isJoined ? 'Leave' : 'Join'}
        />
      </span>
    </div>
  );
};
