import React, { FC } from 'react';

import { TabType } from '@common/types/common';
import { EventItem, EventItemType } from '@dumbComponents/EventItem/EventItem';
import { Loader } from '@dumbComponents/Loader/Loader';
import { Tabs } from '@dumbComponents/Tabs/Tabs';

import styles from './EventPage.module.scss';

const filterItems: TabType[] = [
  {
    id: 'all',
    title: 'All Events',
    href: '/events',
  },
  {
    id: 'future',
    title: 'Future Events',
    href: '/events/future',
  },
  {
    id: 'past',
    title: 'Past Events',
    href: '/events/past',
  },
];

type Props = {
  activeTabId: string;
  events?: EventItemType[];
  isLoading: boolean;
};

export const EventPage: FC<Props> = ({ activeTabId, events, isLoading }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navBar}>
        <Tabs tabs={filterItems} activeTabId={activeTabId} />
        <div className={styles.listOptions}>options</div>
      </div>
      {isLoading && !events?.length && <Loader />}
      {!!events?.length && (
        <div className={styles.eventsWrapper}>
          {events.map((event, i) => (
            <EventItem key={i} {...event} />
          ))}
        </div>
      )}
    </div>
  );
};
