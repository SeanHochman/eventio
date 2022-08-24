import { Layout } from '@components/Layout/Layout';

import '../styles/globals.scss';
import { CommonProps, EventioPage } from '../types/pages';

import type { AppProps } from 'next/app';

interface PageProps extends AppProps<CommonProps> {
  pageProps: CommonProps;
  Component: EventioPage<CommonProps>;
}

const MyApp = (props: PageProps) => {
  const { Component, pageProps } = props;

  return (
    <div id="__app-wrapper">
      <Layout Component={Component} props={pageProps} />
    </div>
  );
};

export default MyApp;
