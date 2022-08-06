import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const ordersController = {
  getAll: async (_req: Request, res: Response) => {
    const orders = await ordersService.getAll();
    res.status(200).json(orders);
  },
  
  // create: async (req: Request, res: Response) => {
  //   const order = req.body;
  //   const orderInserted = await ordersService.create(order);
  //   res.status(201).json(orderInserted);
  // },
};

export default ordersController;