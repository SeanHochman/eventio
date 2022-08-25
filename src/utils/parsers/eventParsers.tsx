import { EventItemType } from '@dumbComponents/EventItem/EventItem';

export type APIUserType = {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
};

export type APIEventType = {
  attendees: APIUserType[];
  id: string;
  createdAt: string;
  capacity: number;
  description: string;
  owner: APIUserType;
  startsAt: string;
  title: string;
};

export const parseEvent = (
  event: APIEventType,
  user?: APIUserType
): EventItemType => ({
  date: new Date(event.startsAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }),
  ownerName: `${event.owner.firstName} ${event.owner.lastName}`,
  attendees: `${event.attendees.length} of ${event.capacity}`,
  href: `/events/${event.id}`,
  isJoined: event.attendees.some(({ id }) => id === user?.id),
  isUserEvent: event.owner.id === user?.id,
  title: event.title,
  description: event.description,
});
