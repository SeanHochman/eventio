import { setLocalStorage } from '@common/utils/localStorage';
import { parseUser } from '@utils/user/parsers';

import { getApiKey } from './utils';

export enum LocalStorageKeys {
  refreshToken = 'eventioRefreshToken',
  accessToken = 'eventioAccessToken',
  user = 'eventioUser',
}

export type APINewUserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const authServerUrl = 'https://testproject-api-v2.strv.com';

export const getHeaders = async (domain: string) => {
  const { key } = await getApiKey(domain);
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('APIKey', key || '');
  return headers;
};

export const storeTokens = () => {
  setLocalStorage(LocalStorageKeys.accessToken, '');
};

export const login = async ({
  email,
  password,
  onError,
  onSuccess,
  apiKey,
}: {
  email: string;
  password: string;
  apiKey: string;
  onSuccess: (response: any) => void;
  onError: (response: any) => void;
}) => {
  const body = { email, password };

  const headers = new Headers();
  headers.append('Content-Type', 'application/json; charset=UTF-8');
  headers.append('APIKey', apiKey);

  const res = await fetch(`${authServerUrl}/auth/native`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });

  if (res.status === 200 && res) {
    const accessToken = res.headers.get('Authorization');
    const refreshToken = res.headers.get('Refresh-Token');
    if (accessToken && refreshToken) {
      setLocalStorage(LocalStorageKeys.accessToken, accessToken);
      setLocalStorage(LocalStorageKeys.refreshToken, refreshToken);
    }
    const user = await res.json().then((user) => parseUser(user));

    onSuccess({ user, accessToken });
  } else {
    onError(res);
  }
};

export const createUser = async ({
  user,
  onError,
  onSuccess,
  apiKey,
}: {
  user: APINewUserType;
  apiKey: string;
  onSuccess: (response: any) => void;
  onError: (response: any) => void;
}) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('APIKey', apiKey);

  const res = await fetch(`${authServerUrl}/users`, {
    method: 'POST',
    headers,
    body: JSON.stringify(user),
  });

  if (res.ok) {
    await login({
      email: user.email,
      password: user.password,
      apiKey,
      onSuccess,
      onError,
    });
  } else {
    onError(res);
  }
};
