import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Container } from 'shared/ui';
import { router } from '../routing';
import { authModel } from 'entities/session';

export const App = () => {
  return (
    <Container>
      <authModel.Gate />
      <RouterProvider router={router} />
    </Container>
  );
};
