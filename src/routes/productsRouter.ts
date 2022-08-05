import { Router } from 'express';
import productsController from '../controllers/productsController';

const productsRouter = Router();

productsRouter.get('/', productsController.getAll);

productsRouter.post('/', productsController.create);

export default productsRouter;