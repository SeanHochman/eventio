import { EventioPage } from 'types/pages';

import type { GetServerSideProps } from 'next';

type Props = {};

const Index: EventioPage<Props> = (props) => {
  return <div />;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({}) => {
  return {
    redirect: {
      destination: `/signIn`,
      statusCode: 301,
    },
  };
};

export default Index;
