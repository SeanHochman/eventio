import { HelloPageContent } from '@components/HelloPageContent';
import { GetServerSideProps, NextPage } from 'next';

type Props = { page: string };

const Index: NextPage<Props> = ({ page }) => {
  return <HelloPageContent page={page} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({}) => {
  const props: Props = {
    page: 'Hello',
  };
  return { props };
};

export default Index;
