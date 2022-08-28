import { FC, useState } from 'react';

import { UiContext } from './context';

// todo: fix types
type Props = { children: any };

export const UiProvider: FC<Props> = ({ children }) => {
  const [currentModal, setCurrentModal] = useState<string>();

  return (
    <UiContext.Provider value={{ setCurrentModal, currentModal }}>
      {children}
    </UiContext.Provider>
  );
};
