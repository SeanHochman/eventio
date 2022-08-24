import { UserEntryPage } from '@components/UserEntryPage/UserEntryPage';

import type { GetServerSideProps, NextPage } from 'next';

type Props = {
  message: string;
  page: string;
  hasSidebar: boolean;
};

const date = new Date();

const Index: NextPage<Props> = (props) => {
  return <UserEntryPage {...props} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({}) => {
  const props: Props = {
    message: `Hello, today is ${date.toLocaleDateString()}`,
    page: 'Login',
    hasSidebar: true,
  };
  return { props };
};

export default Index;
