import { FC, useCallback } from 'react';

import { MenuItemType } from './DropdownMenu';
import styles from './DropdownMenu.module.scss';

export const MenuItem: FC<{
  item: MenuItemType;
  handleCloseDropdown: () => void;
}> = ({ item, handleCloseDropdown }) => {
  const { id, href, name, onClick } = item;
  const handleOnClick = useCallback(() => {
    onClick && onClick(id);
    handleCloseDropdown && handleCloseDropdown();
  }, [handleCloseDropdown, id, onClick]);

  return (
    <div
      key={id}
      className={styles.menuItem}
      {...(onClick && { onClick: handleOnClick })}
    >
      {href ? <a href={href}>{name}</a> : name}
    </div>
  );
};
