import { GetServerSideProps, NextPage } from 'next';

import { UserEntryPage } from '@components/UserEntryPage/UserEntryPage';

type Props = { page: string };

const Index: NextPage<Props> = ({ page }) => {
  return <UserEntryPage page={page} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({}) => {
  const props: Props = {
    page: 'Hello',
  };
  return { props };
};

export default Index;
