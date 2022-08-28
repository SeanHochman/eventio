import React from 'react';

import {
  emailValidation,
  passwordValidation,
  textValidation,
} from '@common/types/forms';
import { Button } from '@dumbComponents/Button/Button';
import { FormHeader } from '@dumbComponents/FormHeader/FormHeader';

import styles from '../Forms.module.scss';
import { InputItem } from '../InputItem/InputItem';
import { useCreateUser } from '../hooks/useCreateUser';

const BUTTON_TEXT = 'Sign up';

export const SignUpForm = () => {
  const { register, handleSubmit, formState, onSubmit } = useCreateUser();

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
          validationOptions={textValidation}
          type="text"
          errorText={'Please enter valid name'}
          placeholder={'First name'}
        />
        <InputItem
          register={register}
          name="lastName"
          errors={formState.errors}
          validationOptions={textValidation}
          type="text"
          errorText={'Please enter valid name'}
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
          type="password"
          validationOptions={passwordValidation}
          errors={formState.errors}
          errorText={`Please enter valid password`}
          placeholder={`Password`}
        />
        <InputItem
          register={register}
          type="password"
          name="repeatPassword"
          validationOptions={passwordValidation}
          errors={formState.errors}
          errorText={`passwords do not match`}
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
