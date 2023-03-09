import React from 'react';
import { Box } from 'shared/ui';
import { LoginButton } from 'feature/session';

export const AuthPage = () => {
  return (
    <div>
      <h1>LOGIN</h1>

      <Box>
        <LoginButton />
      </Box>
    </div>
  );
};
