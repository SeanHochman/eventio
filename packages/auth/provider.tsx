import { useRouter } from 'next/router';
import { FC, useMemo, useCallback, useEffect, useState } from 'react';

import { UserType } from '@common/types/user';
import { getLocalStorage, setLocalStorage } from '@common/utils/localStorage';

import { LocalStorageKeys } from './api';
import { UseAuth } from './context';
import {
  getStoredTokens,
  isTokenExpired,
  refreshAccessToken,
  removeResponse,
} from './utils';

type Props = { children: any; authUrl: string; baseUrl: string };

export const AuthProvider: FC<Props> = ({ children, authUrl, baseUrl }) => {
  const { push } = useRouter();
  const [accessToken, setAccessToken] = useState<string | undefined>(
    getStoredTokens().accessToken || undefined
  );
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    !isTokenExpired(accessToken || '')
  );

  const [userInfo, setUserInfo] = useState<UserType | null>(null);

  const handleSetUserInfo = useCallback((userInfo: UserType) => {
    const user = setLocalStorage(
      LocalStorageKeys.user,
      JSON.stringify(userInfo)
    );
    setUserInfo(user);
  }, []);

  const handleLogout = useCallback(() => {
    setAccessToken(undefined);
    setIsLoggedIn(false);
    removeResponse();
    push('/signIn');
  }, [push]);

  const validateAccessToken = useCallback(() => {
    refreshAccessToken(authUrl).then(({ status }) => {
      if (status === 'successTokenRefresh') {
        const user = getLocalStorage(LocalStorageKeys.user);
        if (user) setUserInfo(JSON.parse(user));
        setIsLoggedIn(true);
      }
      if (status === 'tokensExpired' || status === 'networkError') {
        handleLogout();
      }
    });
  }, [authUrl, handleLogout]);

  // On Mount or on access token change (in case of registration)
  useEffect(validateAccessToken, [accessToken, validateAccessToken]);

  const contextValue = useMemo(() => {
    return {
      isLoggedIn,
      setIsLoggedIn,
      setUserInfo: handleSetUserInfo,
      setAccessToken,
      handleLogout,
      userInfo,
    };
  }, [handleLogout, handleSetUserInfo, isLoggedIn, userInfo]);

  return <UseAuth.Provider value={contextValue}>{children}</UseAuth.Provider>;
};
