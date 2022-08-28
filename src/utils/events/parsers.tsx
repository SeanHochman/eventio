import { UserType } from '@common/types/user';
import { EventItemType } from '@dumbComponents/EventItem/EventItem';
import { APIEventType, FilterOptsType } from '@types';

const rightNow = Date.now();

export const filterFutureEvents = (event: APIEventType) => {
  return new Date(event.startsAt).getTime() > rightNow;
};

export const filterPastEvents = (event: APIEventType) => {
  return new Date(event.startsAt).getTime() < rightNow;
};

export const filterEvents =
  (filterOpts?: FilterOptsType) => (event: APIEventType) => {
    if (!filterOpts) return event;
    if (filterOpts.filterFuture) return filterFutureEvents(event);
    if (filterOpts.filterPast) return filterPastEvents(event);
    return event;
  };

export const parseEvent = (
  event: APIEventType,
  user?: UserType | null
): EventItemType => {
  return {
    date: new Date(event.startsAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }),
    ownerName: `${event.owner.firstName} ${event.owner.lastName}`,
    attendees: `${event.attendees.length} of ${event.capacity}`,
    attendeeList: [
      `${event.owner.firstName} ${event.owner.lastName}`,
      ...event.attendees.map((item) => `${item.firstName} ${item.lastName}`),
    ],
    href: `/events/${event.id}`,
    isJoined: event.attendees.some(({ id }) => id === user?.id),
    isUserEvent: event.owner.id === user?.id,
    title: event.title,
    description: event.description,
    id: event.id,
  };
};
