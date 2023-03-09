import { attach, createDomain, sample } from 'effector';
import { authModel } from 'entities/session';

const logOutDomain = createDomain('logOut');

export const logOutRequested = logOutDomain.event();

const logOutFx = attach({ effect: authModel.logOutFx });

sample({ clock: logOutRequested, target: logOutFx });
sample({ clock: logOutFx.done, target: authModel.sessionClosed });
