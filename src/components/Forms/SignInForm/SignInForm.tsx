import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import SvgEye from '@common/svgs/eye';
import SvgEyeClosed from '@common/svgs/eyeClosed';
import {
  emailValidation,
  FormValues,
  passwordValidation,
} from '@common/types/forms';
import { InputItem } from '@components/Forms/InputItem/InputItem';
import { Button } from '@dumbComponents/Button/Button';
import { FormHeader } from '@dumbComponents/FormHeader/FormHeader';

import styles from '../Forms.module.scss';

export const SignInForm = () => {
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
  const { register, handleSubmit, formState, getValues } = useForm<FormValues>({
    mode: 'onChange',
  });
  const onSubmit = useCallback(async () => {
    const { email, password } = getValues();
    console.log(email, password);
    // await login({
    //   username: email,
    //   password,
    //   onSuccess: onLoginSuccess,
    //   onError: onLoginError,
    //   lithiumClientId,
    // });
  }, [getValues]);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  return (
    <div className={styles.formWrapper}>
      <FormHeader
        title="Sign in to Eventio."
        subtitle="Enter your details below."
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputItem
          register={register}
          name="email"
          errors={formState.errors}
          validationOptions={emailValidation}
          type="email"
          errorText={'Please enter valid email'}
          placeholder={'Email'}
        />

        <InputItem
          register={register}
          name="password"
          validationOptions={passwordValidation}
          errors={formState.errors}
          type={isPasswordVisible ? 'text' : 'password'}
          errorText={`Please enter valid password`}
          onIconClick={togglePasswordVisibility}
          placeholder={`Password`}
          Icon={isPasswordVisible ? <SvgEyeClosed /> : <SvgEye />}
        />

        <Button
          classNames={styles.submit}
          htmlType="submit"
          type="primary"
          text={`Sign In`}
          isDisabled={!formState.isValid}
        />
      </form>
    </div>
  );
};
