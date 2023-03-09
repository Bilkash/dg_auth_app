import React from 'react';
import { Button } from 'shared/ui';
import * as logOutModel from '../model';

export const LogOutButton = () => {
  return (
    <Button
      onClick={() => {
        logOutModel.logOutRequested();
      }}
    >
      Log Out
    </Button>
  );
};
