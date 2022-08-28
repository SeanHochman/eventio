import { GetServerSideProps } from 'next';

import { EventPage } from '@components/EventPage/EventPage';
import { Modal } from '@components/Modal/Modal';
import { CreateButton } from '@dumbComponents/CreateButton/CreateButton';
import { UserMenu } from '@dumbComponents/UserMenu/UserMenu';
import { useGetAllEvents } from '@hooks/fetchers/useEvents';
import {
  CommonProps,
  EventioPage,
  PageEnums,
  PageTitleEnums,
  APIEventType,
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
    filterPast: true,
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
      page: PageEnums.PAST,
      pageTitle: `Eventio - ${PageTitleEnums.PASTEVENTS}`,
    },
    activeTabId: 'past',
    initialEvents,
  };

  return { props };
};

Index.Blocks = { Modal, CreateButton, CornerContent: UserMenu };

export default Index;
