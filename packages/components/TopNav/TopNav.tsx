import React, { FC } from 'react';

import { NavLinkType } from '@common/types/common';
import { Link } from '@dumbComponents/Link/Link';

import styles from './TopNav.module.scss';
type Props = {
  links: NavLinkType[];
};

export const TopNav: FC<Props> = ({ links }) => {
  return (
    <>
      {links.map((link) => {
        const Component = link.icon;
        return (
          <Link key={link.text} className={styles.wrapper} href={link.href}>
            <Component />
            {link.text}
          </Link>
        );
      })}
    </>
  );
};
