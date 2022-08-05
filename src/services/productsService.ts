import Product from '../interfaces/Product';
import productsModel from '../models/productsModel';

const productsService = {
  getAll: async (): Promise<Product[]> => {
    const result = await productsModel.getAll();
    return result;
  },
};

export default productsService;