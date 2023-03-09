import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { authModel } from 'entities/session';
import { useNavigate } from 'react-router-dom';
import { RedirectWrapperType } from '../types';
import { pathes } from '../config';

export default function RedirectWrapper({ children }: RedirectWrapperType) {
  const user = useStore(authModel.$user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(pathes.auth);
    } else {
      navigate(pathes.profile);
    }
  }, [user]);

  return <>{children}</>;
}
