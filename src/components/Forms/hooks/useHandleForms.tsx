import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { login } from '@auth/api';
import { FormValues } from '@common/types/forms';
import { getApiKey } from '@utils/api/fetchers';

export const useHandleForms = () => {
  const { push } = useRouter();
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);

  const { register, handleSubmit, formState, getValues } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onLoginSuccess = useCallback(() => {
    console.log('success sdfsdfs');

    push('/events');
  }, [push]);

  const onLoginError = useCallback(() => {
    console.log('error');
  }, []);

  const onSubmit = useCallback(async () => {
    const { email, password } = getValues();
    const { key } = await getApiKey();

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
