import Link from 'next/link';
import React, { FC, useMemo } from 'react';

import SvgLittleMan from '@common/svgs/littleMan';
import { Button } from '@dumbComponents/Button/Button';

import styles from './EventItem.module.scss';

export type EventItemType = {
  date: string;
  title: string;
  description: string;
  attendees: string;
  attendeeList: string[];
  ownerName: string;
  isJoined: boolean;
  isUserEvent?: boolean;
  href: string;
  id: string;
};

type Props = {
  event: EventItemType;
  useAttendEvent: any;
  page: string;
};

export const EventItem: FC<Props> = ({ event, useAttendEvent, page }) => {
  const {
    date,
    id,
    title,
    description,
    attendees,
    ownerName,
    isJoined,
    isUserEvent,
    href,
  } = event;
  const { handleJoinEvent, handleLeaveEvent } = useAttendEvent({ event, page });

  const buttonInfo = useMemo(() => {
    if (isUserEvent)
      return { type: 'secondary', text: 'edit', href: `/events/${id}` };
    if (isJoined)
      return { type: 'tertiary', text: 'Leave', onClick: handleLeaveEvent };
    if (!isJoined)
      return { type: 'primary', text: 'Join', onClick: handleJoinEvent };
  }, [handleJoinEvent, handleLeaveEvent, id, isJoined, isUserEvent]);

  return (
    <div className={styles.itemWrapper}>
      <a href={href}>
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
        </span>
      </a>
      {buttonInfo?.href ? (
        <Link href={buttonInfo.href}>
          <Button
            classNames={styles.joinButton}
            type={buttonInfo?.type}
            size="small"
            text={buttonInfo?.text || ''}
            isDisabled={!handleJoinEvent}
          />
        </Link>
      ) : (
        <Button
          classNames={styles.joinButton}
          type={buttonInfo?.type}
          size="small"
          text={buttonInfo?.text || ''}
          isDisabled={!handleJoinEvent}
          onClick={buttonInfo?.onClick}
        />
      )}
    </div>
  );
};
