import React from 'react';

import { emailValidation, passwordValidation } from '@common/types/forms';
import { Button } from '@dumbComponents/Button/Button';
import { FormHeader } from '@dumbComponents/FormHeader/FormHeader';

import styles from '../Forms.module.scss';
import { InputItem } from '../InputItem/InputItem';
import { useHandleLogin } from '../hooks/useHandleLogin';

const BUTTON_TEXT = 'Sign up';

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState,
    isPasswordVisible,
    togglePasswordVisibility,
    onSubmit,
  } = useHandleLogin();

  return (
    <div className={styles.formWrapper}>
      <FormHeader
        title="Get started absolutely free."
        subtitle="Enter your details below."
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputItem
          register={register}
          name="firstName"
          errors={formState.errors}
          validationOptions={emailValidation}
          type="text"
          errorText={'Please enter valid email'}
          placeholder={'First name'}
        />
        <InputItem
          register={register}
          name="lastName"
          errors={formState.errors}
          validationOptions={emailValidation}
          type="text"
          errorText={'Please enter valid email'}
          placeholder={'Last name'}
        />
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
        />
        <InputItem
          register={register}
          name="repeatPassword"
          validationOptions={passwordValidation}
          errors={formState.errors}
          type={isPasswordVisible ? 'text' : 'password'}
          errorText={`passwords do not match`}
          onIconClick={togglePasswordVisibility}
          placeholder={`Repeat Password`}
        />

        <Button
          classNames={styles.submit}
          htmlType="submit"
          type="primary"
          text={BUTTON_TEXT}
          isDisabled={!formState.isValid}
        />
      </form>
    </div>
  );
};
