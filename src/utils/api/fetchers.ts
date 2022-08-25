import getConfig from 'next/config';

const eventsUrl =
  'https://private-anon-94c36099ca-strvtestprojectv2.apiary-proxy.com/events';

const { publicRuntimeConfig } = getConfig();

const { PUBLIC_DOMAIN } = publicRuntimeConfig;

export const getApiKey = async () =>
  await fetch(`${PUBLIC_DOMAIN}/api/auth`).then(async (a) => await a.json());

export const getAllEvents = async () => {
  const { key } = await getApiKey();
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('APIKey', key || '');

  return await fetch(eventsUrl, {
    method: 'GET',
    headers,
  }).then(async (res) => await res.json());
};
