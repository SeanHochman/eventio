import { GetServerSideProps } from 'next';

import { EventPage } from '@components/EventPage/EventPage';
import { useGetAllEvents } from '@hooks/fetchers/useEvents';
import { CommonProps, EventioPage, PageEnums, PageTitleEnums } from '@types';
import { getAllEvents } from '@utils/api/fetchers';
import { APIEventType } from '@utils/parsers/eventParsers';

type Props = CommonProps & {
  activeTabId: string;
  initialEvents?: APIEventType[];
};

const Index: EventioPage<Props> = ({
  activeTabId,
  initialEvents,
  meta: { page },
}) => {
  const { events, isLoading } = useGetAllEvents(page, initialEvents);
  console.log(events);
  return (
    <EventPage
      activeTabId={activeTabId}
      events={events}
      isLoading={isLoading}
    />
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const initialEvents = await getAllEvents();

  const props: Props = {
    meta: { page: PageEnums.EVENTS, pageTitle: PageTitleEnums.EVENTS },
    activeTabId: 'all',
    initialEvents,
  };

  return { props };
};

export default Index;
