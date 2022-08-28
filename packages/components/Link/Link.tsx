import classNames from 'classnames';
import React, { CSSProperties, FC, ReactNode } from 'react';

type Props = {
  href?: string;
  children: ReactNode;
  className?: string;

  style?: CSSProperties;
  target?: string;
};

export const Link: FC<Props> = ({
  href,
  children,
  style,
  target,
  className,
}) => {
  return (
    <a
      style={style}
      href={href}
      className={classNames(className)}
      target={target}
    >
      {children}
    </a>
  );
};
