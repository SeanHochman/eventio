import useSwr from 'swr';

import { getAllEvents } from '@utils/api/fetchers';
import { APIEventType, parseEvent } from '@utils/parsers/eventParsers';

export const useGetAllEvents = (
  page: string,
  initialEvents?: APIEventType[]
) => {
  const { data: events, isValidating } = useSwr(
    page,
    () =>
      getAllEvents().then((data) => {
        return data.map((event: APIEventType) => parseEvent(event));
      }),
    {
      ...(initialEvents && {
        fallbackData: {
          data: initialEvents || undefined,
        },
      }),
    }
  );

  return {
    events,
    isLoading: isValidating,
  };
};
