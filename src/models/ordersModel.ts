// import { ResultSetHeader } from 'mysql2';
import Order from '../interfaces/Order';
import connection from './connection';

const ordersModel = {
  getAll: async (): Promise<Order[]> => {
    const sql = `SELECT orders.id, orders.userId, products.id AS productId
    FROM Trybesmith.Orders AS orders
    INNER JOIN Trybesmith.Products AS products 
    ON orders.id = products.orderId
    ORDER BY id ASC`;
    const [result] = await connection.query(sql);
    return result as Order[];
  },
  
  // create: async (product: Order): Promise<Order> => {
  //   const { productsIds } = product;
  //   const sql = 'INSERT INTO Trybesmith.Orders (name, amount, orderId) VALUES (?, ?, ?)';
  //   const [dataInserted] = await connection.query<ResultSetHeader>(sql, [name, amount, 3]);
  //   const { insertId } = dataInserted;
  //   return { id: insertId, ...product };
  // },
};

export default ordersModel;