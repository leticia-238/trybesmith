import Product from '../interfaces/Product';
import productsModel from '../models/productsModel';

const productsService = {
  getAll: async (): Promise<Product[]> => {
    const result = await productsModel.getAll();
    return result;
  },
  
  create: async (product: Product): Promise<Product> => {
    const productInserted = await productsModel.create(product);
    return productInserted;
  },
};

export default productsService;