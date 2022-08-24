import { FC } from 'react';

import { Layout } from '@components/Layout/Layout';

import '../styles/globals.scss';

import type { AppProps } from 'next/app';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <div id="app-wrapper">
      <Layout Component={Component} props={pageProps} />
    </div>
  );
};

export default MyApp;
