import jwtDecode from 'jwt-decode';

import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '@common/utils/localStorage';

import { getHeaders, LocalStorageKeys } from './api';

const AUTH_ENDPOINT = 'https://testproject-api-v2.strv.com/auth/native';

export const getApiKey = async (domain: string) =>
  await fetch(`${domain}/api/auth`).then(async (a) => await a.json());

export const getStoredTokens = () => {
  return {
    accessToken: getLocalStorage(LocalStorageKeys.accessToken),
    refreshToken: getLocalStorage(LocalStorageKeys.refreshToken),
  };
};

export const removeResponse = () => {
  removeLocalStorage(LocalStorageKeys.accessToken);
  removeLocalStorage(LocalStorageKeys.refreshToken);
  removeLocalStorage(LocalStorageKeys.user);
};

export const renewToken = async (refreshToken: string, domain: string) => {
  const headers = await getHeaders(domain);
  return await fetch(AUTH_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({ refreshToken }),
    headers,
  });
};

export const isTokenExpired = (token: string): boolean => {
  try {
    if (token) {
      const decodedToken = jwtDecode(token) as any;
      return Date.now() >= decodedToken.exp * 1000;
    }
  } catch (e) {
    // TODO handle this error
  }
  return true;
};

export const storeTokensInLocalStorage = (
  accessToken: string,
  refreshToken: string
) => {
  setLocalStorage(LocalStorageKeys.accessToken, accessToken);
  setLocalStorage(LocalStorageKeys.refreshToken, refreshToken);
};

export const refreshAccessToken = async (
  url: string
): Promise<{
  accessToken?: string;
  status: 'successTokenRefresh' | 'networkError' | 'tokensExpired';
}> => {
  const { accessToken, refreshToken } = getStoredTokens();

  if (accessToken && !isTokenExpired(accessToken)) {
    return { status: 'successTokenRefresh', accessToken };
  }

  if (refreshToken && !isTokenExpired(refreshToken)) {
    const res = await renewToken(refreshToken, url);

    const newAccessToken = res.headers.get('Authorization') || '';
    const newRefreshToken = res.headers.get('Refresh-Token') || '';
    if (res.status === 200 && (newAccessToken || newRefreshToken)) {
      storeTokensInLocalStorage(newAccessToken, newRefreshToken);
      return { status: 'successTokenRefresh', accessToken: newAccessToken };
    } else {
      return { status: 'networkError' };
    }
  } else {
    // TODO: implement logout and clearing userdata if this happens

    return { status: 'tokensExpired' };
  }
};
