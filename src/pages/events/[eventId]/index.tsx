import { GetServerSideProps } from 'next';

import { Modal } from '@components/Modal/Modal';
import { SingleEventContent } from '@components/SingleEventContent/SingleEventContent';
import { CreateButton } from '@dumbComponents/CreateButton/CreateButton';
import { Loader } from '@dumbComponents/Loader/Loader';
import { TopNav } from '@dumbComponents/TopNav/TopNav';
import { UserMenu } from '@dumbComponents/UserMenu/UserMenu';
import { useAttendEvent, useGetSingleEvent } from '@hooks/fetchers/useEvents';
import {
  APIEventType,
  CommonProps,
  EventioPage,
  PageEnums,
  PageTitleEnums,
} from '@types';
import { getEvent } from '@utils/events/api';

type Props = CommonProps & { initialEvent: APIEventType; eventId: string };

const Index: EventioPage<Props> = ({
  meta: { page },
  initialEvent,
  eventId,
}) => {
  const { event, isLoading } = useGetSingleEvent(page, eventId, initialEvent);

  const { isJoined, handleJoinEvent, handleLeaveEvent, handleDeleteEvent } =
    useAttendEvent({
      event,
      page,
    });

  return (
    <>
      {!event && isLoading && <Loader />}
      {event && (
        <SingleEventContent
          event={event}
          isJoined={isJoined}
          handleJoinEvent={handleJoinEvent}
          handleLeaveEvent={handleLeaveEvent}
          handleDeleteEvent={handleDeleteEvent}
        />
      )}
    </>
  );
};

type Params = { eventId: string };

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({
  params,
}) => {
  const eventId = params?.eventId || '';

  const initialEvent = await getEvent(eventId || '');

  const props: Props = {
    meta: {
      page: `${PageEnums.EVENTS}-${eventId}`,
      pageTitle: `Eventio - ${PageTitleEnums.EVENTS}`,
    },
    eventId,
    navLinks: [{ href: '/events', text: 'Go to events' }],
    initialEvent,
  };

  return { props };
};

Index.Blocks = {
  Modal,
  CreateButton,
  TopNavigation: TopNav,
  CornerContent: UserMenu,
};

export default Index;
