import usersModel from '../models/usersModel';
import User from '../interfaces/User';

const usersService = {  
  create: async (user: User): Promise<void> => {
    await usersModel.create(user);
  },
};

export default usersService;