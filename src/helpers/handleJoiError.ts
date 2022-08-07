import { ErrorReport } from 'joi';
import CustomError from './CustomError';

const handleJoiError = (error: ErrorReport[]): Error => {
  const [{ code }] = error;
  const [err] = error;
  if (code === 'any.required') {
    return err;
  }
  return new CustomError('UnauthorizedError', 'Username or password invalid');
};

export default handleJoiError;