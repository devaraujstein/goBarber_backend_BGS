import { Router } from 'express';

import AppointmentRouter from './appointments.route';

const routes = Router();

routes.use('/appointments', AppointmentRouter);

export default routes;
