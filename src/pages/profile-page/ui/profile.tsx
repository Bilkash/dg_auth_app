import React from 'react';
import { LogOutButton } from 'feature/session';
import { Box } from 'shared/ui';
import { useStore } from 'effector-react';
import { authModel } from 'entities/session';
import RedirectWrapper from 'shared/ui/RedirectWrapper';
import { UserComponent } from 'entities/session/ui';

export const ProfilePage = () => {
  const user = useStore(authModel.$user);

  if (user) {
    return (
      <RedirectWrapper>
        <div>
          <h1>PROFILE</h1>

          <UserComponent id={user.id} name={user.name} />

          <Box>
            <LogOutButton />
          </Box>
        </div>
      </RedirectWrapper>
    );
  } else {
    return (
      <RedirectWrapper>
        <Box>Loading</Box>
      </RedirectWrapper>
    );
  }
};
