import { Request, Response } from 'express';
import productsService from '../services/productsService';

const productsController = {
  getAll: async (_req: Request, res: Response) => {
    const result = await productsService.getAll();
    res.status(200).json(result);
  },
  
  create: async (req: Request, res: Response) => {
    const product = req.body;
    await productsService.validateProductBody(product);
    const productInserted = await productsService.create(product);
    res.status(201).json(productInserted);
  },
};

export default productsController;