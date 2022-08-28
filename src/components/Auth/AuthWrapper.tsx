import getConfig from 'next/config';
import React, { FC } from 'react';

import { AuthProvider } from '@auth/provider';

const { publicRuntimeConfig } = getConfig();

const { PUBLIC_DOMAIN, PUBLIC_AUTH_URL } = publicRuntimeConfig;

type Props = { children: any };
export const AuthProviderWrapper: FC<Props> = ({ children }) => {
  return (
    <AuthProvider baseUrl={PUBLIC_DOMAIN} authUrl={PUBLIC_AUTH_URL}>
      {children}
    </AuthProvider>
  );
};
