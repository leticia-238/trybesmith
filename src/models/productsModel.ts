import { ResultSetHeader } from 'mysql2';
import Product from '../interfaces/Product';
import connection from './connection';

const productsModel = {
  getAll: async (): Promise<Product[]> => {
    const sql = 'SELECT * FROM Trybesmith.Products';
    const [result] = await connection.query(sql);
    return result as Product[];
  },
  
  create: async (product: Product): Promise<Product> => {
    const { name, amount } = product;
    const sql = 'INSERT INTO Trybesmith.Products (name, amount, orderId) VALUES (?, ?, ?)';
    const [dataInserted] = await connection.query<ResultSetHeader>(sql, [name, amount, 3]);
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  },
};

export default productsModel;