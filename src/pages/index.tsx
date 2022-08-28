import { HomePage } from '@components/HomePage/HomePage';
import { Sidebar } from '@components/Sidebar/Sidebar';
import { CommonProps, EventioPage } from 'types/pages';

import type { GetServerSideProps } from 'next';

type Props = CommonProps & {};

const Index: EventioPage<Props> = () => {
  return <HomePage />;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({}) => {
  return { props: { meta: { page: 'home', pageTitle: 'Eventio - Welcome' } } };
};

Index.Blocks = {
  Sidebar,
};

export default Index;
