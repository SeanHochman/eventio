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
  handleDeleteEvent: any;
};

export const SingleEventContent: FC<Props> = ({
  event,
  isJoined,
  handleJoinEvent,
  handleLeaveEvent,
  handleDeleteEvent,
}) => {
  return (
    <div className={styles.wrapper}>
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
          {!event.isUserEvent ? (
            <Button
              type={isJoined ? 'secondary' : 'primary'}
              size="small"
              text={isJoined ? 'Leave' : 'Join'}
              isDisabled={!handleJoinEvent}
              onClick={isJoined ? handleLeaveEvent : handleJoinEvent}
            />
          ) : (
            <Button
              type="tertiary"
              text="Delete"
              onClick={handleDeleteEvent}
              size="small"
            />
          )}
        </span>
      </div>
      <div className={styles.attendees}>
        Attendees
        <div className={styles.attendeeList}>
          {event.attendeeList.map((person) => {
            return (
              <span key={person} className={styles.attendeeName}>
                {person}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
