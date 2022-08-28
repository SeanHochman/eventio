import React, { FC } from 'react';

import { useAuth } from '@auth/hooks';
import { useUi } from '@common/context/UiContext/utils';
import { HeadContent } from '@components/document/HeadContent/HeadContent';
import { useWindowWidth } from '@hooks/useWindowWidth';
import { CommonProps, EventioPage } from '@types';

import styles from './Layout.module.scss';
import { useLayout } from './useLayout';

type Props = {
  Component: EventioPage<CommonProps>;
  props: CommonProps;
};

export const Layout: FC<Props> = ({ Component, props }) => {
  const { userInfo } = useAuth();
  const { currentModal } = useUi();

  const { meta, navLinks } = props;
  const { isDesktopWidth } = useWindowWidth();

  const {
    navItems,
    loginOrSignUpInfo,
    menuItems,
    handleSetCreateEventModal,
    shouldRenderUserMenu,
    shouldRenderSignIn,
  } = useLayout({ page: meta.page, navLinks });

  return (
    <>
      {meta.pageTitle && <HeadContent pageTitle={meta.pageTitle} />}
      {Component.Blocks?.Modal && currentModal && <Component.Blocks.Modal />}
      <div className={styles.outerWrapper}>
        {Component.Blocks?.Sidebar && isDesktopWidth && (
          <Component.Blocks.Sidebar />
        )}
        <div className={styles.main}>
          {Component.Blocks?.TopNavigation && navLinks && (
            <div className={styles.topMiddleLink}>
              <Component.Blocks.TopNavigation links={navItems} />
            </div>
          )}

          {Component.Blocks?.CornerContent && (
            <div className={styles.cornerContent}>
              {(shouldRenderUserMenu || shouldRenderSignIn) && (
                <Component.Blocks.CornerContent
                  {...(shouldRenderSignIn && {
                    message: loginOrSignUpInfo?.message,
                    href: loginOrSignUpInfo?.link,
                    linkText: loginOrSignUpInfo?.linkText,
                  })}
                  {...(shouldRenderUserMenu && {
                    userInfo,
                    menuItems,
                  })}
                />
              )}
            </div>
          )}
          <div className={styles.innerContent}>
            <Component {...props} />
          </div>
        </div>
      </div>
      {Component.Blocks?.CreateButton && (
        <div className={styles.createButtonWrapper}>
          <Component.Blocks.CreateButton
            openCreateModal={handleSetCreateEventModal}
          />
        </div>
      )}
    </>
  );
};
