import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { APINewUserType, createUser } from '@auth/api';
import { useAuth } from '@auth/hooks';
import { getApiKey } from '@auth/utils';
import { FormValues } from '@common/types/forms';
import { UserType } from '@common/types/user';

const { publicRuntimeConfig } = getConfig();

const { PUBLIC_DOMAIN } = publicRuntimeConfig;

export const useCreateUser = () => {
  const { setIsLoggedIn, setUserInfo, setAccessToken } = useAuth();
  const { push } = useRouter();
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);

  const { register, handleSubmit, formState, getValues, setError } =
    useForm<FormValues>({
      mode: 'onChange',
    });

  const onCreateUserSuccess = useCallback(
    ({ user }: { user: UserType }) => {
      console.log('success', user);

      setIsLoggedIn(true);
      setUserInfo(user);
      push('/events');
    },
    [push, setIsLoggedIn, setUserInfo]
  );

  const onCreateUserError = useCallback(
    (res: any) => {
      console.log('create error', res);
      setAccessToken(undefined);
      setError('email', { message: 'login failed' });
    },
    [setAccessToken, setError]
  );

  const onSubmit = useCallback(async () => {
    const { firstName, lastName, email, password } = getValues();
    const { key } = await getApiKey(PUBLIC_DOMAIN);
    const user: APINewUserType = { firstName, lastName, email, password };

    await createUser({
      user,
      onSuccess: onCreateUserSuccess,
      onError: onCreateUserError,
      apiKey: key,
    });
  }, [getValues, onCreateUserError, onCreateUserSuccess]);

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
