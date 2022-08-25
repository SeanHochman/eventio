import { setLocalStorage } from '@common/utils/localStorage';

export enum LocalStorageKeys {
  refreshToken = 'eventioRefreshToken',
  accessToken = 'eventioAccessToken',
}

const emailAuthServerUrl =
  'https://private-anon-94c36099ca-strvtestprojectv2.apiary-proxy.com/auth/native';

export const storeTokens = (headers: any) => {
  console.log('rrrrrrr', headers);
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
  headers.append('Content-Type', 'application/json');
  headers.append('APIKey', apiKey);

  const res = await fetch(emailAuthServerUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });

  if (res.status === 200 && res) {
    console.log('res headers', res.headers.get('refresh-token'));
    const bla = await res.json();
    console.log(bla);

    // TODO: store in local storage

    // Prevent field edit complete event from firing at the same time with the login form when already saved credentials are used.
    setTimeout(() => onSuccess(res), 500);
  } else {
    console.log('baddddd');
    const arg = await res.json();
    console.log(arg);
    // Prevent field edit complete event from firing at the same time with the login form when already saved credentials are used.
    setTimeout(() => onError(res), 500);
  }
};
