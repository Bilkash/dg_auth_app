import { createAuth0Client } from '@auth0/auth0-spa-js';
import { auth0Config } from 'shared/config';
import { CurrentUser } from '../types';

const readyAuth0Client = createAuth0Client(auth0Config);

export const login = async () => {
  const auth0Client = await readyAuth0Client;

  await auth0Client.loginWithRedirect();
};

export const logout = async () => {
  const auth0Client = await readyAuth0Client;

  await auth0Client.logout();
};

export const getCurrentUser = async () => {
  const auth0Client = await readyAuth0Client;
  const isAuth = await auth0Client.isAuthenticated();

  if (isAuth) {
    return getUser();
  }

  if (isRedirected()) {
    await auth0Client.handleRedirectCallback();

    return getUser();
  }
};

const getUser = async (): Promise<CurrentUser> => {
  const auth0Client = await readyAuth0Client;
  const user = await auth0Client.getUser();

  return {
    id: user?.sub || '',
    name: user?.nickname || '',
  };
};

const isRedirected = () => {
  const query = window.location.search;

  return query.includes('code=') && query.includes('state=');
};
