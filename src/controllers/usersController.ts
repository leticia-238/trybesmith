import { Request, Response } from 'express';
import usersService from '../services/usersService';

const usersController = {
  create: async (req: Request, res: Response) => {
    const user = req.body;
    await usersService.create(user);
    const token: string = Date.now().toString();
    res.status(201).json({ token });
  },
};

export default usersController;