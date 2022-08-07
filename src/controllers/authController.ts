import { Request, Response } from 'express';
import authService from '../services/authService';

const authController = {
  authenticate: async (req: Request, res: Response) => {
    const login = req.body;
    await authService.validateLoginBody(login);
    const token = authService.generateToken(login);
    res.status(200).json({ token });
  },
};

export default authController;