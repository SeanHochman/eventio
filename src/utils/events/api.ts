import { getStoredTokens } from '@auth/utils';
import { getHeaders } from '@utils/common/api';

export const EVENTS_URL =
  'https://private-anon-94c36099ca-strvtestprojectv2.apiary-proxy.com/events';

export const getAllEvents = async () => {
  const headers = await getHeaders();
  return await fetch(EVENTS_URL, {
    method: 'GET',
    headers,
  }).then(async (res) => await res.json());
};

export const getEvent = async (eventId: string) => {
  const headers = await getHeaders();
  return await fetch(`${EVENTS_URL}/${eventId}`, {
    method: 'GET',
    headers,
  }).then(async (res) => await res.json());
};

export const joinOrLeaveEvent = async ({
  eventId,
  type,
}: {
  eventId: string;
  type: 'join' | 'leave';
}) => {
  const headers = await getHeaders();
  const accessToken = getStoredTokens().accessToken;
  if (accessToken) {
    headers.set('Authorization', accessToken);
    return await fetch(`${EVENTS_URL}/${eventId}/attendees/me`, {
      method: type === 'join' ? 'POST' : 'DELETE',
      headers,
    });
  }
  return;
};

export const deleteEvent = async ({ eventId }: { eventId: string }) => {
  const headers = await getHeaders();
  const accessToken = getStoredTokens().accessToken;
  if (accessToken) {
    headers.set('Authorization', accessToken);
    return await fetch(`${EVENTS_URL}/${eventId}`, {
      method: 'DELETE',
      headers,
    });
  }
  return;
};

type CreateEventBodyType = {
  title: string;
  description: string;
  startsAt: string;
  capacity: number;
};

export const createEvent = async ({
  event,
  onError,
  onSuccess,
}: {
  event: CreateEventBodyType;
  onSuccess: (response: any) => void;
  onError: (response: any) => void;
}) => {
  return await getHeaders().then(async (headers) => {
    const accessToken = getStoredTokens().accessToken;

    if (accessToken) {
      headers.append('Authorization', accessToken);
      const res = await fetch(`${EVENTS_URL}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(event),
      });

      if (res.ok) {
        const event = await res.json();
        onSuccess(event);
      } else {
        onError(res);
      }
    }
  });
};
