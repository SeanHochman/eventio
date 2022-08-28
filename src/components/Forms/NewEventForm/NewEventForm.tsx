import React, { useCallback } from 'react';

import {
  dateValidation,
  numberValidation,
  textValidation,
  timeValidation,
} from '@common/types/forms';
import { Button } from '@dumbComponents/Button/Button';
import { FormHeader } from '@dumbComponents/FormHeader/FormHeader';

import styles from '../Forms.module.scss';
import { InputItem } from '../InputItem/InputItem';
import { useCreateEvent } from '../hooks/useCreateEvent';

const BUTTON_TEXT = 'Create Event';

export const NewEventForm = () => {
  const { register, handleSubmit, formState, onSubmit, reset } =
    useCreateEvent();

  const handleReset = useCallback(() => {
    reset(
      {
        title: '',
        description: '',
        date: undefined,
        time: undefined,
        capacity: 0,
      },
      {
        keepErrors: true,
        keepDirty: true,
        keepIsSubmitted: false,
        keepTouched: false,
        keepIsValid: false,
        keepSubmitCount: false,
      }
    );
  }, [reset]);

  return (
    <div className={styles.formWrapper}>
      <FormHeader title="Create new event" subtitle="Enter Details Below" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputItem
          register={register}
          name="title"
          errors={formState.errors}
          validationOptions={textValidation}
          type="text"
          errorText={'Please enter valid title'}
          placeholder={'Title'}
        />
        <InputItem
          register={register}
          name="description"
          errors={formState.errors}
          validationOptions={textValidation}
          type="text"
          errorText={'Please enter valid description'}
          placeholder={'Description'}
        />
        <InputItem
          register={register}
          name="date"
          errors={formState.errors}
          validationOptions={dateValidation}
          type="date"
          errorText={'Please enter valid date'}
          placeholder={'Date'}
        />

        <InputItem
          register={register}
          name="time"
          validationOptions={timeValidation}
          errors={formState.errors}
          type={'time'}
          errorText={`Please enter valid time`}
          placeholder={`Time`}
        />
        <InputItem
          register={register}
          name="capacity"
          validationOptions={numberValidation}
          errors={formState.errors}
          type={'number'}
          errorText={`Please enter a capacity`}
          placeholder={`Capacity`}
        />
        <div className={styles.buttonWrapper}>
          <Button
            classNames={styles.submit}
            htmlType="submit"
            type="primary"
            text={BUTTON_TEXT}
            isDisabled={!formState.isValid}
          />
          <Button
            type="tertiary"
            onClick={handleReset}
            text="clear"
            size="small"
          />
        </div>
      </form>
    </div>
  );
};
