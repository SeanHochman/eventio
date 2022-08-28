import { GetServerSideProps } from 'next';

import { Modal } from '@components/Modal/Modal';
import { SingleEventContent } from '@components/SingleEventContent/SingleEventContent';
import { CreateButton } from '@dumbComponents/CreateButton/CreateButton';
import { EventItemType } from '@dumbComponents/EventItem/EventItem';
import { Loader } from '@dumbComponents/Loader/Loader';
import { LoginOrSignupLink } from '@dumbComponents/LoginOrSignupLink/LoginOrSignupLink';
import { TopNav } from '@dumbComponents/TopNav/TopNav';
import { UserMenu } from '@dumbComponents/UserMenu/UserMenu';
import { useGetSingleEvent, useAttendEvent } from '@hooks/useEvents';
import { CommonProps, EventioPage, PageEnums, PageTitleEnums } from '@types';
import { getEvent } from '@utils/events/api';
import { parseEvent } from '@utils/events/parsers';

type Props = CommonProps & { initialEvent: EventItemType; eventId: string };

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
          isEditPage
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

  const initialEvent = await getEvent(eventId || '').then((event) =>
    parseEvent(event)
  );

  const props: Props = {
    meta: {
      page: `${PageEnums.EDIT}-${eventId}`,
      pageTitle: `Eventio - ${PageTitleEnums.EDIT}`,
    },
    eventId,
    navLinks: [{ href: '/events', text: 'Back to events' }],
    initialEvent,
  };

  return { props };
};

Index.Blocks = {
  Modal,
  CreateButton,
  TopNavigation: TopNav,
  CornerContent: { UserMenu, LoginOrSignupLink },
};

export default Index;
