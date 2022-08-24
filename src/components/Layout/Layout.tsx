import React, { FC } from 'react';

import { Sidebar } from '@components/Sidebar/Sidebar';
import { HeadContent } from '@components/document/HeadContent/HeadContent';
import { useWindowWidth } from '@hooks/useWindowWidth';
import { CommonProps, EventioPage } from 'types/pages';

import styles from './Layout.module.scss';

type Props = {
  Component: EventioPage<CommonProps>;
  props: CommonProps;
};

export const Layout: FC<Props> = ({ Component, props }) => {
  const { hasSidebar = false, meta } = props;
  const { isDesktopWidth } = useWindowWidth();
  return (
    <>
      {meta && <HeadContent meta={meta} />}
      <div className={styles.outerWrapper}>
        {hasSidebar && isDesktopWidth && <Sidebar />}
        <div className={styles.main}>
          <Component {...props} />
        </div>
      </div>
    </>
  );
};
