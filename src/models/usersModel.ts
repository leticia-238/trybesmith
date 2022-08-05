import { ResultSetHeader } from 'mysql2';
import User from '../interfaces/User';
import connection from './connection';

const usersModel = {
  create: async (user: User): Promise<void> => {
    const { username, classe, level, password } = user;
    const sql = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
    VALUES (?, ?, ?, ?)`;
    await connection
      .query<ResultSetHeader>(sql, [username, classe, level, password]);
  },
};

export default usersModel;