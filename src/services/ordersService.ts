// import Order from '../interfaces/Order';
import ordersModel from '../models/ordersModel';

type Orders = { 
  id:number,
  userId:number,
  productsIds:number[]
};

const ordersService = {
  getAll: async () => {
    const orders = await ordersModel.getAll();

    const obj: Record<number, Orders> = {};
    
    orders.forEach(({ id, userId, productId }) => {
      const productsIds = obj[id] ? [...obj[id].productsIds, productId] : [productId];
      obj[userId] = { id, userId, productsIds };
    });
      
    return Object.values(obj);
  },
  
  // create: async (order: Order): Promise<Order> => {
  //   const orderInserted = await ordersModel.create(order);
  //   return orderInserted;
  // },
};

export default ordersService;