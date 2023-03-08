import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { pathes } from '../shared/config';
import { AuthPage } from '../pages/auth-page';
import { ProfilePage } from '../pages/profile-page';

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
