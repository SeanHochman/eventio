import { useContext } from 'react';

import { UiContext, UiContextType } from './context';

export const useUi = (): UiContextType => {
  return useContext(UiContext);
};
