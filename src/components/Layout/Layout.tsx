import { NextComponentType, NextPageContext } from 'next';
import React, { FC } from 'react';

import { Sidebar } from '@components/Sidebar/Sidebar';
import { HeadContent } from '@components/document/HeadContent/HeadContent';

import styles from './Layout.module.scss';

type Props = {
  Component: NextComponentType<NextPageContext, any, {}>;
  props: any;
};

export const Layout: FC<Props> = ({ Component, props }) => {
  const { page, hasSidebar } = props;
  return (
    <>
      <HeadContent page={page} />
      <div className={styles.outerWrapper}>
        {hasSidebar && <Sidebar />}
        <div className={styles.main}>
          <Component {...props} />
        </div>
      </div>
    </>
  );
};
