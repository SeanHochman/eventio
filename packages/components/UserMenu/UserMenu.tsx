import React, { FC, useCallback, useMemo, useRef, useState } from 'react';

import { useClickOutside } from '@common/hooks/useClickOutside';
import { UserType } from '@common/types/user';
import {
  DropdownMenu,
  MenuItemType,
} from '@dumbComponents/DropdownMenu/DropdownMenu';

import styles from './UserMenu.module.scss';

type Props = {
  userInfo: UserType;
  menuItems: MenuItemType[];
};

export const UserMenu: FC<Props> = ({ userInfo, menuItems = [] }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCloseDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  const handleSetIsDropdownOpen = useCallback(() => {
    setIsDropdownOpen(!isDropdownOpen);
  }, [isDropdownOpen]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, handleCloseDropdown, {
    disabled: !isDropdownOpen,
  });

  const items = useMemo(() => {
    return menuItems.map((item) => {
      return item;
    });
  }, [menuItems]);

  return (
    <div className={styles.wrapper} ref={dropdownRef}>
      <button
        className={styles.buttonWrapper}
        onClick={handleSetIsDropdownOpen}
      >
        <span className={styles.initials}>{userInfo.initials}</span>
        <span className={styles.name}>{userInfo.name}</span>
        <span className={styles.arrowDown} />
      </button>

      <DropdownMenu
        menuItems={items}
        isDropdownOpen={isDropdownOpen}
        handleCloseDropdown={handleCloseDropdown}
      />
    </div>
  );
};
