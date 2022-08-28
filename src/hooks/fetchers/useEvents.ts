import { useRouter } from 'next/router';
import { useCallback, useState, useEffect } from 'react';
import useSwr, { useSWRConfig } from 'swr';

import { useAuth } from '@auth/hooks';
import { EventItemType } from '@dumbComponents/EventItem/EventItem';
import { APIEventType } from '@types';
import {
  deleteEvent,
  getAllEvents,
  getEvent,
  joinOrLeaveEvent,
} from '@utils/events/api';
import { filterEvents, parseEvent } from '@utils/events/parsers';

export const useGetAllEvents = (
  initialEvents?: APIEventType[],
  filterOpts?: { filterFuture?: boolean; filterPast?: boolean }
) => {
  const { userInfo } = useAuth();

  const fetcher = useCallback(
    () =>
      getAllEvents().then((data) => {
        return data
          .filter(filterEvents(filterOpts))
          .map((event: APIEventType): EventItemType => {
            return parseEvent(event, userInfo);
          });
      }),
    [filterOpts, userInfo]
  );
  const {
    data: events,
    isValidating,
    mutate,
  } = useSwr(`/events`, fetcher, {
    fallbackData: { data: initialEvents || undefined },
    revalidateIfStale: true,
  });

  return {
    events,
    isLoading: isValidating,
    mutate,
  };
};

export const useGetSingleEvent = (
  page: string,
  eventId: string,
  initialEvent?: EventItemType
): { event: EventItemType | undefined; isLoading: boolean } => {
  const { userInfo } = useAuth();
  const fetcher = useCallback(
    () =>
      getEvent(eventId).then(
        (event: APIEventType): EventItemType => parseEvent(event, userInfo)
      ),
    [eventId, userInfo]
  );
  const { data: event, isValidating } = useSwr(page, fetcher, {
    fallbackData: initialEvent,
  });

  return {
    event,
    isLoading: isValidating,
  };
};

export const useAttendEvent = ({
  event,
  page,
}: {
  event?: EventItemType;
  page: string;
}) => {
  const { mutate } = useSWRConfig();
  const { push } = useRouter();
  const [isJoined, setIsJoined] = useState<boolean>(false);
  const handleJoinEvent = useCallback(() => {
    if (event) {
      mutate(
        `/${page}`,
        joinOrLeaveEvent({ eventId: event.id, type: 'join' }).then((res) =>
          res?.ok ? setIsJoined(true) : setIsJoined(false)
        )
      );
    }
  }, [event, mutate, page]);

  const handleLeaveEvent = useCallback(async () => {
    if (event) {
      mutate(
        `/${page}`,
        joinOrLeaveEvent({ eventId: event.id, type: 'leave' }).then((res) =>
          res?.ok ? setIsJoined(false) : setIsJoined(true)
        )
      );
    }
  }, [event, mutate, page]);

  const handleDeleteEvent = useCallback(async () => {
    if (event) {
      await deleteEvent({ eventId: event.id }).then((res) => {
        if (res?.ok) push('/events');
      });
    }
  }, [event, push]);

  useEffect(() => {
    if (event?.isJoined !== isJoined) {
      setIsJoined(!!event?.isJoined);
    }
  }, [event?.isJoined, isJoined, setIsJoined]);

  return {
    handleJoinEvent,
    handleLeaveEvent,
    isJoined,
    setIsJoined,
    handleDeleteEvent,
  };
};
