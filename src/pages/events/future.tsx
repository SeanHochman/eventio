import { GetServerSideProps } from 'next';

import { EventPage } from '@components/EventPage/EventPage';
import { Modal } from '@components/Modal/Modal';
import { CreateButton } from '@dumbComponents/CreateButton/CreateButton';
import { UserMenu } from '@dumbComponents/UserMenu/UserMenu';
import { useGetAllEvents } from '@hooks/useEvents';
import {
  APIEventType,
  CommonProps,
  EventioPage,
  PageEnums,
  PageTitleEnums,
} from '@types';
import { getAllEvents } from '@utils/events/api';

type Props = CommonProps & {
  activeTabId: string;
  initialEvents?: APIEventType[];
};

const Index: EventioPage<Props> = ({
  activeTabId,
  initialEvents,
  meta: { page },
}) => {
  const { events, isLoading } = useGetAllEvents(initialEvents, {
    filterFuture: true,
  });

  return (
    <EventPage
      activeTabId={activeTabId}
      events={events}
      isLoading={isLoading}
      page={page}
    />
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const initialEvents = await getAllEvents();

  const props: Props = {
    meta: {
      page: PageEnums.FUTURE,
      pageTitle: `Eventio - ${PageTitleEnums.FUTUREEVENTS}`,
    },
    activeTabId: 'future',
    initialEvents,
  };

  return { props };
};

Index.Blocks = { Modal, CreateButton, CornerContent: UserMenu };

export default Index;
