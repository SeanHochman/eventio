import { GetServerSideProps } from 'next';

import { SignUpForm } from '@components/Forms/SignUpForm/SignUpForm';
import { Sidebar } from '@components/Sidebar/Sidebar';
import { LoginOrSignupLink } from '@dumbComponents/LoginOrSignupLink/LoginOrSignupLink';
import { UserMenu } from '@dumbComponents/UserMenu/UserMenu';
import { EventioPage, PageEnums, PageTitleEnums } from '@types';

type Props = {};

const Index: EventioPage<Props> = (props) => {
  return <SignUpForm />;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const props: Props = {
    meta: {
      page: PageEnums.SIGNUP,
      pageTitle: `Eventio - ${PageTitleEnums.SIGNUP}`,
    },
  };
  return { props };
};

Index.Blocks = {
  Sidebar,
  CornerContent: { UserMenu, LoginOrSignupLink },
};

export default Index;
