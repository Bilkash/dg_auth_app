import React from 'react';
import { UserType } from '../types';
import { Container } from '../../../shared/ui';

export const UserComponent = ({ id, name }: UserType) => {
  return (
    <Container>
      <Container>id: {id}</Container>
      <Container>name: {name}</Container>
    </Container>
  );
};
