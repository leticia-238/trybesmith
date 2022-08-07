import { Router } from 'express';
import authController from '../controllers/authController';

const loginRouter = Router();

loginRouter.post('/', authController.authenticate);

export default loginRouter;