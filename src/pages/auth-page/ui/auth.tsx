import React from 'react';
import { Box } from 'shared/ui';
import { LoginButton } from 'feature/session';
import RedirectWrapper from 'shared/ui/RedirectWrapper';

export const AuthPage = () => {
  return (
    <RedirectWrapper>
      <div>
        <h1>LOGIN</h1>

        <Box>
          <LoginButton />
        </Box>
      </div>
    </RedirectWrapper>
  );
};
