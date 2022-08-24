import { GetServerSideProps } from 'next';

import { SignUpForm } from '@components/Forms/SignUpForm/SignUpForm';
import { LoginOrSignupLink } from '@components/LoginOrSignupLink/LoginOrSignupLink';
import { EventioPage, PageEnums, PageTitleEnums } from '@types';

type Props = {};

const Index: EventioPage<Props> = (props) => {
  return (
    <>
      <LoginOrSignupLink
        message="Don't have an account?"
        href="/signIn"
        linkText={PageTitleEnums.SIGNIN}
      />
      <SignUpForm />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const props: Props = {
    meta: { page: PageEnums.SIGNUP, pageTitle: PageTitleEnums.SIGNUP },
    hasSidebar: true,
  };
  return { props };
};

export default Index;
