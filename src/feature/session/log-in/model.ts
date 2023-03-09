import { attach, createDomain, sample } from 'effector';
import { authModel } from 'entities/session';

const logInDomain = createDomain('logIn');

export const logInRequested = logInDomain.event();

const logInFx = attach({ effect: authModel.logInFx });

sample({ clock: logInRequested, target: logInFx });
sample({ clock: logInFx.done, target: authModel.sessionCreated });
