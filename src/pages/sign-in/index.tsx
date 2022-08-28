import { GetServerSideProps } from 'next';

import { SignInForm } from '@components/Forms/SignInForm/SignInForm';
import { Sidebar } from '@components/Sidebar/Sidebar';
import { LoginOrSignupLink } from '@dumbComponents/LoginOrSignupLink/LoginOrSignupLink';
import { CommonProps, EventioPage, PageEnums, PageTitleEnums } from '@types';

type Props = CommonProps & {};

const Index: EventioPage<Props> = () => {
  return <SignInForm />;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const props: Props = {
    meta: {
      page: PageEnums.SIGNIN,
      pageTitle: `Eventio - ${PageTitleEnums.SIGNIN}`,
    },
  };
  return { props };
};

Index.Blocks = {
  Sidebar,
  CornerContent: { LoginOrSignupLink },
};

export default Index;
