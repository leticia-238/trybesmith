import Joi from 'joi';
import handleJoiError from '../helpers/handleJoiError';

export const productSchema = Joi.object({
  name: Joi.string().min(3).required().error(handleJoiError),
  amount: Joi.string().min(3).required().error(handleJoiError),
});

export const loginSchema = Joi.object({
  username: Joi.string().required().invalid('userinvalido').error(handleJoiError),
  password: Joi.string().required().invalid('1senharerrada').error(handleJoiError),
});

export default { loginSchema, productSchema };