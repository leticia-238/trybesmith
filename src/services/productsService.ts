import Product from '../interfaces/Product';
import productsModel from '../models/productsModel';
import { productSchema } from './validationsSchemas';

const productsService = {
  getAll: async (): Promise<Product[]> => {
    const result = await productsModel.getAll();
    return result;
  },
  
  create: async (product: Product): Promise<Product> => {
    const productInserted = await productsModel.create(product);
    return productInserted;
  },
  
  validateProductBody: async (product: Product) => {
    await productSchema.validateAsync(product);
  },
};

export default productsService;