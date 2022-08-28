import React, { FC } from 'react';

import SvgTrash from '@common/svgs/trash';
import { EventItemType } from '@dumbComponents/EventItem/EventItem';

import { Attendees } from './Attendees';
import { Edit } from './Edit';
import { Info } from './Info';
import styles from './SingleEventContent.module.scss';

type Props = {
  event: EventItemType;
  isJoined: boolean;
  handleJoinEvent: any;
  handleLeaveEvent: any;
  handleDeleteEvent: any;
  isEditPage?: boolean;
};

export const SingleEventContent: FC<Props> = ({
  event,
  isJoined,
  handleJoinEvent,
  handleLeaveEvent,
  handleDeleteEvent,
  isEditPage,
}) => {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.top}>
        <span>DETAIL EVENT: {event.id} </span>
        {event.isUserEvent && (
          <span className={styles.deleteEvent} onClick={handleDeleteEvent}>
            <SvgTrash />
            <span>DELETE EVENT</span>
          </span>
        )}
      </div>
      <div className={styles.wrapper}>
        {isEditPage ? (
          <Edit event={event} handleDeleteEvent={handleDeleteEvent} />
        ) : (
          <Info
            event={event}
            isJoined={isJoined}
            handleJoinEvent={handleJoinEvent}
            handleLeaveEvent={handleLeaveEvent}
          />
        )}
        <Attendees attendeeList={event.attendeeList} />
      </div>
    </div>
  );
};
