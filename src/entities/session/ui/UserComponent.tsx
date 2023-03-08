import React from 'react';
import { CurrentUser } from '../types';
import { Container } from 'shared/ui';

export const UserComponent = (currentUser: CurrentUser) => {
  const { id, name } = currentUser;

  return (
    <Container>
      <Container>id: {id}</Container>
      <Container>name: {name}</Container>
    </Container>
  );
};
