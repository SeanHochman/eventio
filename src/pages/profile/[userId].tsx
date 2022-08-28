import { GetServerSideProps } from 'next';

import { useAuth } from '@auth/hooks';
import { Modal } from '@components/Modal/Modal';
import { ProfilePage } from '@components/ProfilePage/ProfilePage';
import { CreateButton } from '@dumbComponents/CreateButton/CreateButton';
import { LoginOrSignupLink } from '@dumbComponents/LoginOrSignupLink/LoginOrSignupLink';
import { TopNav } from '@dumbComponents/TopNav/TopNav';
import { UserMenu } from '@dumbComponents/UserMenu/UserMenu';
import {
  APIEventType,
  CommonProps,
  EventioPage,
  PageEnums,
  PageTitleEnums,
} from '@types';
import { getEvent } from '@utils/events/api';

type Props = CommonProps & { initialEvent: APIEventType; eventId: string };

const Index: EventioPage<Props> = () => {
  const { userInfo } = useAuth();
  return (
    <>
      <ProfilePage userInfo={userInfo} />
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
      page: `${PageEnums.PROFILE}-${eventId}`,
      pageTitle: `Eventio - ${PageTitleEnums.PROFILE}`,
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
