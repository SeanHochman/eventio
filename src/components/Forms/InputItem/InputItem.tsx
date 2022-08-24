import classNames from 'classnames';
import React, { DOMAttributes, FC, ReactElement } from 'react';
import { FieldErrors, UseFormRegister, FieldValues } from 'react-hook-form';

import { FormValues } from '@common/types/forms';

import styles from './InputItem.module.scss';

const validationKeys = ['required', 'pattern'];

type InputItemType = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FormValues>;
  type: string;
  name: string;
  errorText: string;
  validationOptions: Record<string, any>;
  Icon?: ReactElement<any, any>;
  onIconClick?: () => void;
  placeholder?: string;
  label?: string;
  value?: string | number;
} & Pick<DOMAttributes<HTMLInputElement>, 'onBlur' | 'onFocus'>;

export const InputItem: FC<InputItemType> = ({
  register,
  errors,
  name,
  type,
  errorText,
  validationOptions,
  Icon,
  onIconClick,
  placeholder,
  label,
  value,
  onBlur,
  onFocus,
}) => {
  return (
    <div className={styles.formItemWrapper}>
      {label && (
        <label htmlFor={name} className={styles.inputLabel}>
          {label}
        </label>
      )}
      <div className={styles.loginFormItem}>
        {!!Icon && (
          <div
            className={classNames(styles.icon, {
              isClickable: !!onIconClick,
            })}
            onClick={onIconClick}
          >
            {Icon}
          </div>
        )}

        <input
          {...register(name, validationOptions)}
          type={type}
          placeholder={placeholder || undefined}
          name={name}
          onBlur={onBlur}
          onFocus={onFocus}
          {...(value && { value })}
        />
        <div
          id={`${name}ErrorHint`}
          style={{
            display: validationKeys.includes(String(errors[name]?.type))
              ? 'block'
              : 'none',
          }}
        >
          <div className={styles.errorMessage}>{errorText}</div>
        </div>
      </div>
    </div>
  );
};
