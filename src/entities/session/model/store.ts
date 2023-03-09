import { createDomain, sample } from 'effector';
import { createGate } from 'effector-react';
import { getCurrentUser, login, logout } from './api';
import { CurrentUser } from '../types';

const authDomain = createDomain('auth');

authDomain.onCreateStore((store) => {
  store.reset(sessionClosed);
});

export const Gate = createGate();

export const sessionCreated = authDomain.event();
export const sessionClosed = authDomain.event();

export const logOutFx = authDomain.effect(logout);
export const logInFx = authDomain.effect(login);
export const getCurrentUserFx = authDomain.effect(getCurrentUser);

export const $user = authDomain.store<CurrentUser | null>(null);

sample({ clock: [Gate.open, sessionCreated], target: getCurrentUserFx });

$user.on(getCurrentUserFx.doneData, (_, obj) => obj);
