import { setLocalStorage } from '@common/utils/localStorage';
import { parseUser } from '@utils/user/parsers';

export enum LocalStorageKeys {
  refreshToken = 'eventioRefreshToken',
  accessToken = 'eventioAccessToken',
  user = 'eventioUser',
}

const emailAuthServerUrl = 'https://testproject-api-v2.strv.com/auth/native';

export const storeTokens = (headers: any) => {
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

  const res = await fetch(emailAuthServerUrl, {
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
