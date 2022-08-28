import React, { FC } from 'react';

import { eventFilterTabs } from '@common/types/common';
import { EventItem, EventItemType } from '@dumbComponents/EventItem/EventItem';
import { Loader } from '@dumbComponents/Loader/Loader';
import { NoEventsMessage } from '@dumbComponents/NoEventsMessage/NoEventsMessage';
import { Tabs } from '@dumbComponents/Tabs/Tabs';
import { useAttendEvent } from '@hooks/fetchers/useEvents';

import styles from './EventPage.module.scss';

type Props = {
  activeTabId: string;
  events?: EventItemType[];
  isLoading: boolean;
  page: string;
};

export const EventPage: FC<Props> = ({
  activeTabId,
  events,
  isLoading,
  page,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navBar}>
        <Tabs tabs={eventFilterTabs} activeTabId={activeTabId} />
        {/* TODO: add view options here */}
      </div>
      {isLoading && <Loader />}
      {!isLoading && !events?.length && <NoEventsMessage />}

      {!!events?.length && !isLoading && (
        <div className={styles.eventsWrapper}>
          {events.map((event, i) => (
            <EventItem
              key={i}
              event={event}
              useAttendEvent={useAttendEvent}
              page={page}
            />
          ))}
        </div>
      )}
    </div>
  );
};
