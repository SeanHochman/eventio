import { useCallback, useMemo } from 'react';

import { useAuth } from '@auth/hooks';
import { useUi } from '@common/context/UiContext/utils';
import SvgArrowLeft from '@common/svgs/arrowLeft';
import { NavLinkType } from '@common/types/common';
import { PageEnums, PageTitleEnums } from '@types';
import { basicMenuItems } from '@utils/user/vars';

export const useLayout = ({
  page,
  navLinks,
}: {
  page: string;
  navLinks?: NavLinkType[];
}) => {
  const { handleLogout, isLoggedIn, userInfo } = useAuth();
  const { setCurrentModal } = useUi();

  const handleSetCreateEventModal = useCallback(() => {
    setCurrentModal('createEvent');
  }, [setCurrentModal]);

  const loginOrSignUpInfo = useMemo(() => {
    if (page === PageEnums.SIGNIN || page === PageEnums.SIGNUP) {
      if (page === PageEnums.SIGNIN) {
        return {
          message: "Don't have an account? ",
          link: `/${PageEnums.SIGNUP}`,
          linkText: PageTitleEnums.SIGNUP,
        };
      } else if (page === PageEnums.SIGNUP) {
        return {
          message: 'Already have an account?',
          link: `/${PageEnums.SIGNIN}`,
          linkText: PageTitleEnums.SIGNIN,
        };
      }
    }
    return;
  }, [page]);

  const menuItems = useMemo(() => {
    return basicMenuItems.map((item) => {
      if (item.id === 'createEvent')
        return { ...item, onClick: handleSetCreateEventModal };
      if (item.id === 'logout') return { ...item, onClick: handleLogout };
      else return item;
    });
  }, [handleLogout, handleSetCreateEventModal]);

  const navItems = useMemo(() => {
    return navLinks?.map((item) => ({ ...item, icon: SvgArrowLeft }));
  }, [navLinks]);

  const shouldRenderUserMenu = isLoggedIn && userInfo && !loginOrSignUpInfo;
  const shouldRenderSignIn = loginOrSignUpInfo && !isLoggedIn;

  return {
    handleSetCreateEventModal,
    loginOrSignUpInfo,
    menuItems,
    navItems,
    shouldRenderSignIn,
    shouldRenderUserMenu,
  };
};