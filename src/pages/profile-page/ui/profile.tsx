import React from 'react';
import { LogOutButton } from 'feature/session';
import { Box } from 'shared/ui';
import { useStore } from 'effector-react';
import { authModel } from 'entities/session';
import RedirectWrapper from '../../../shared/ui/RedirectWrapper';

export const ProfilePage = () => {
  const user = useStore(authModel.$user);

  return (
    <RedirectWrapper>
      <div>
        <h1>PROFILE</h1>

        <Box>
          <LogOutButton />
        </Box>
      </div>
    </RedirectWrapper>
  );
};
