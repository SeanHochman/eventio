import App from 'next/app';

import { UiProvider } from '@common/context/UiContext/provider';
import { AuthProviderWrapper } from '@components/Auth/AuthWrapper';
import { Layout } from '@components/Layout/Layout';

import '../styles/globals.scss';
import { CommonProps, EventioPage } from '../types/pages';

import type { AppContext, AppProps } from 'next/app';

interface PageProps extends AppProps<CommonProps> {
  pageProps: CommonProps;
  Component: EventioPage<CommonProps>;
}

const MyApp = (props: PageProps) => {
  const { Component, pageProps } = props;

  return (
    <UiProvider>
      <AuthProviderWrapper>
        <div id="__app-wrapper">
          <Layout Component={Component} props={pageProps} />
        </div>
      </AuthProviderWrapper>
    </UiProvider>
  );
};

type EventioAppContext = AppContext & { Component: EventioPage<{}> };

MyApp.getInitialProps = async (appContext: EventioAppContext) => {
  const pageProps = await App.getInitialProps(appContext);

  return {
    ...pageProps,
    meta: { page: '', pageTitle: 'Eventio' },
  };
};

export default MyApp;
