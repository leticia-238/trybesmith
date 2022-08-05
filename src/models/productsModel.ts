import Product from '../interfaces/Product';
import connection from './connection';

const productsModel = {
  getAll: async (): Promise<Product[]> => {
    const sql = 'SELECT * FROM Trybesmith.Products';
    const [result] = await connection.query(sql);
    return result as Product[];
  },
};

export default productsModel;