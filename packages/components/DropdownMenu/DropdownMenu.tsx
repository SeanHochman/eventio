import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './DropdownMenu.module.scss';
import { MenuItem } from './MenuItem';

export type MenuItemType = {
  name: string;
  href?: string;
  onClick?: (id?: string) => void;
  id: string;
};

type Props = {
  menuItems: MenuItemType[];
  isDropdownOpen: boolean;
  handleCloseDropdown: () => void;
};

export const DropdownMenu: FC<Props> = ({
  menuItems,
  isDropdownOpen,
  handleCloseDropdown,
}) => {
  return (
    <div className={styles.outerWrapper}>
      <div
        className={classNames(styles.wrapper, {
          isOpen: isDropdownOpen,
        })}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            handleCloseDropdown={handleCloseDropdown}
          />
        ))}
      </div>
    </div>
  );
};
