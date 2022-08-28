import { GetServerSideProps } from 'next';

import SvgArrowLeft from '@common/svgs/arrowLeft';
import { EventPage } from '@components/EventPage/EventPage';
import { Modal } from '@components/Modal/Modal';
import { CreateButton } from '@dumbComponents/CreateButton/CreateButton';
import { UserMenu } from '@dumbComponents/UserMenu/UserMenu';
import { useGetAllEvents } from '@hooks/fetchers/useEvents';
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
  const { events, isLoading } = useGetAllEvents(initialEvents);

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
      page: PageEnums.EVENTS,
      pageTitle: `Eventio - ${PageTitleEnums.EVENTS}`,
    },
    activeTabId: 'all',
    initialEvents,
  };

  return { props };
};

Index.Icons = { NavIcon: SvgArrowLeft };
Index.Blocks = { Modal, CreateButton, CornerContent: UserMenu };

export default Index;
