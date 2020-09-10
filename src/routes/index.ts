import { Router } from 'express';

import AppointmentRouter from './appointments.route';
import UsersRouter from './users.route';

const routes = Router();

routes.use('/appointments', AppointmentRouter);
routes.use('/users', UsersRouter);

export default routes;
