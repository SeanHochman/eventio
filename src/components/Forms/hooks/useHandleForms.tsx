import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { login } from '@auth/api';
import { FormValues } from '@common/types/forms';

const getApiKey = async () =>
  await fetch('/api/auth').then(async (a) => await a.json());

export const useHandleForms = () => {
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);

  const { register, handleSubmit, formState, getValues } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onLoginSuccess = useCallback(() => {
    console.log('success sdfsdfs');
  }, []);

  const onLoginError = useCallback(() => {
    console.log('error');
  }, []);

  const onSubmit = useCallback(async () => {
    const { email, password } = getValues();
    console.log(email, password);
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
