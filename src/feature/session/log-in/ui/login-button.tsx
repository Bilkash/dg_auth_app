import React from 'react';
import { Button } from 'shared/ui';
import * as logInModel from '../model';

export const LoginButton = () => {
  return <Button onClick={() => logInModel.logInRequested()}>Log In</Button>;
};
