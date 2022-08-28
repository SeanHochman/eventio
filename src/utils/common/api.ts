import getConfig from 'next/config';

import { getApiKey } from '@auth/utils';

const { publicRuntimeConfig } = getConfig();

const { PUBLIC_DOMAIN } = publicRuntimeConfig;

export const EVENTS_URL =
  'https://private-anon-94c36099ca-strvtestprojectv2.apiary-proxy.com/events';

export const getHeaders = async () => {
  const { key } = await getApiKey(PUBLIC_DOMAIN);
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('APIKey', key || '');
  return headers;
};
