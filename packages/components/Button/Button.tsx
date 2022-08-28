import classnames from 'classnames';
import React, { FC } from 'react';

import styles from './Button.module.scss';

type Props = {
  text: string;
  type?: 'primary' | 'secondary' | 'tertiary' | string;
  htmlType?: 'button' | 'submit' | 'reset';
  testId?: string;
  href?: string;
  block?: boolean;
  onClick?: (event: any) => void;
  isDisabled?: boolean;
  size?: 'big' | 'small';
  classNames?: string;
};

export const Button: FC<Props> = ({
  onClick,
  isDisabled,
  htmlType,
  text,
  type,
  size = 'big',
  classNames,
}) => {
  const className = classnames(styles.btn, type, size, classNames, {
    isDisabled,
  });
  return (
    <button
      disabled={isDisabled}
      type={htmlType}
      onClick={onClick}
      className={className}
    >
      {text}
    </button>
  );
};
