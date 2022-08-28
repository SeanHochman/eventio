import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { login } from '@auth/api';
import { useAuth } from '@auth/hooks';
import { getApiKey } from '@auth/utils';
import { FormValues } from '@common/types/forms';
import { UserType } from '@common/types/user';

const { publicRuntimeConfig } = getConfig();

const { PUBLIC_DOMAIN } = publicRuntimeConfig;

export const useHandleLogin = () => {
  const { setIsLoggedIn, setUserInfo, setAccessToken } = useAuth();
  const { push } = useRouter();
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);

  const { register, handleSubmit, formState, getValues, setError } =
    useForm<FormValues>({
      mode: 'onChange',
    });

  const onLoginSuccess = useCallback(
    ({ user, accessToken }: { user: UserType; accessToken: string }) => {
      setAccessToken(accessToken);
      setIsLoggedIn(true);
      setUserInfo(user);
      push('/events');
    },
    [push, setAccessToken, setIsLoggedIn, setUserInfo]
  );

  const onLoginError = useCallback(() => {
    setAccessToken(undefined);
    setError('email', { message: 'login failed' });
  }, [setAccessToken, setError]);

  const onSubmit = useCallback(async () => {
    const { email, password } = getValues();
    const { key } = await getApiKey(PUBLIC_DOMAIN);

    await login({
      email,
      password,
      onSuccess: onLoginSuccess,
      onError: onLoginError,
      apiKey: key,
    });
  }, [getValues, onLoginError, onLoginSuccess]);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  return {
    onSubmit,
    register,
    handleSubmit,
    formState,
    isPasswordVisible,
    togglePasswordVisibility,
  };
};
