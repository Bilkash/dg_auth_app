import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AuthPage } from '../pages/AuthPage';
import { ProfilePage } from '../pages/ProfilePage';
import { pathes } from '../shared/config';

export const router = createBrowserRouter([
  {
    path: pathes.auth,
    element: <AuthPage />,
  },
  {
    path: pathes.profile,
    element: <ProfilePage />,
  },
]);
