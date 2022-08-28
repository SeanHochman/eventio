import React from 'react';

import SvgEye from '@common/svgs/eye';
import SvgEyeClosed from '@common/svgs/eyeClosed';
import { emailValidation, passwordValidation } from '@common/types/forms';
import { InputItem } from '@components/Forms/InputItem/InputItem';
import { Button } from '@dumbComponents/Button/Button';
import { FormHeader } from '@dumbComponents/FormHeader/FormHeader';

import styles from '../Forms.module.scss';
import { useHandleLogin } from '../hooks/useHandleLogin';

const BUTTON_TEXT = 'Sign in';

export const SignInForm = () => {
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
          text={BUTTON_TEXT}
          isDisabled={!formState.isValid}
        />
      </form>
    </div>
  );
};
