import React, { FC } from 'react';
import { Header } from '@components/Header/Header';

import { NextComponentType, NextPageContext } from 'next';
import { HeadContent } from '@components/document/HeadContent/HeadContent';
import styles from './Layout.module.scss';

type Props = {
  Component: NextComponentType<NextPageContext, any, {}>;
  props: any;
};

export const Layout: FC<Props> = ({ Component, props }) => {
  const { page } = props;
  return (
    <>
      <HeadContent page={page} />
      <Header />
      <div className={styles.main}>
        <Component {...props} />
      </div>
    </>
  );
};
