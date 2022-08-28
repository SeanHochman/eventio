import React, { FC } from 'react';

import SvgLittleMan from '@common/svgs/littleMan';
import { Button } from '@dumbComponents/Button/Button';
import { EventItemType } from '@dumbComponents/EventItem/EventItem';

import styles from './SingleEventContent.module.scss';

type Props = {
  event: EventItemType;
  isJoined: boolean;
  handleJoinEvent: any;
  handleLeaveEvent: any;
};

export const Info: FC<Props> = ({
  event,
  isJoined,
  handleJoinEvent,
  handleLeaveEvent,
}) => {
  return (
    <div className={styles.event}>
      <div className={styles.date}>{event.date}</div>
      <div className={styles.title}>
        <div>{event.title}</div>
        <div className={styles.owner}>{event.ownerName}</div>
      </div>

      <div className={styles.description}>{event.description}</div>
      <span className={styles.foot}>
        <div className={styles.att}>
          <SvgLittleMan />
          {event.attendees}
        </div>
        <Button
          type={isJoined ? 'tertiary' : 'primary'}
          size="small"
          text={isJoined ? 'Leave' : 'Join'}
          isDisabled={!handleJoinEvent}
          onClick={isJoined ? handleLeaveEvent : handleJoinEvent}
        />
      </span>
    </div>
  );
};
