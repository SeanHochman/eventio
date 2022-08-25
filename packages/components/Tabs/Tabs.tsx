import classNames from 'classnames';
import React, { FC } from 'react';

import { TabType } from '@common/types/common';

import styles from './Tabs.module.scss';

type Props = {
  tabs: TabType[];
  activeTabId: string;
};

export const Tabs: FC<Props> = ({ tabs, activeTabId }) => {
  console.log(activeTabId);
  return (
    <div className={styles.wrapper}>
      {tabs.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={classNames(styles.tab, {
            [styles.isActive]: activeTabId === item.id,
          })}
        >
          {item.title}
        </a>
      ))}
    </div>
  );
};
