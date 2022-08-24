import type { GetServerSideProps, NextPage } from 'next';

type Props = {
  message: string;
  page: string;
  hasSidebar: boolean;
};

const date = new Date();

const Index: NextPage<Props> = ({ message }) => {
  return <div>{message}</div>;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({}) => {
  const props: Props = {
    message: `Hello, today is ${date.toLocaleDateString()}`,
    page: 'Home',
    hasSidebar: true,
  };
  return { props };
};

export default Index;
