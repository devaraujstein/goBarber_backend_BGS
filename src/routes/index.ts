import { Router } from 'express';

import AppointmentRouter from './appointments.route';
import UsersRouter from './users.route';
import SessionsRouter from './sessions.route';

const routes = Router();

routes.use('/appointments', AppointmentRouter);
routes.use('/users', UsersRouter);
routes.use('/sessions', SessionsRouter);

export default routes;
