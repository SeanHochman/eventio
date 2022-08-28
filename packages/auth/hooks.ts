import { useContext } from 'react';

import { UseAuth } from './context';

export const useAuth = () => useContext(UseAuth);
