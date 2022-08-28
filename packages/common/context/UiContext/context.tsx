import { createContext } from 'react';

import { noop } from '@common/utils/common';

export type UiContextType = {
  currentModal?: string;
  setCurrentModal: (currentModal?: string) => void;
};

export const UiContext = createContext<UiContextType>({
  currentModal: undefined,
  setCurrentModal: noop,
});
