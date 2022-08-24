import { GetServerSideProps } from 'next';

import { SignInForm } from '@components/Forms/SignInForm/SignInForm';
import { LoginOrSignupLink } from '@components/LoginOrSignupLink/LoginOrSignupLink';
import { EventioPage, PageEnums, PageTitleEnums } from '@types';

type Props = {};

const Index: EventioPage<Props> = (props) => {
  return (
    <>
      <LoginOrSignupLink
        message="Don't have an account?"
        href="/signUp"
        linkText={PageTitleEnums.SIGNUP}
      />
      <SignInForm />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const props: Props = {
    meta: { page: PageEnums.SIGNIN, pageTitle: PageTitleEnums.SIGNIN },
    hasSidebar: true,
  };
  return { props };
};

export default Index;
