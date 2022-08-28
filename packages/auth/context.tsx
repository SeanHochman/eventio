import { createContext } from 'react';

import { UserType } from '@common/types/user';
import { noop } from '@common/utils/common';

export type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (loginState: boolean) => void;
  setUserInfo: (user: UserType) => void;
  setAccessToken: (token?: string) => void;
  handleLogout: () => void;
  userInfo: UserType | null;
};

export const UseAuth = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: noop,
  setAccessToken: noop,
  setUserInfo: noop,
  handleLogout: noop,
  userInfo: null,
});
