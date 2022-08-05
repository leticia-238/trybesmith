import { Request, Response } from 'express';
import productsService from '../services/productsService';

const productsController = {
  getAll: async (_req: Request, res: Response) => {
    const result = await productsService.getAll();
    res.status(200).json(result);
  },
};

export default productsController;