import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Container } from '../../shared/ui';
import { router } from '../routing';

export const App = () => {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
};
