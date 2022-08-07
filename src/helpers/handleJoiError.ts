import { ErrorReport } from 'joi';
import CustomError from './CustomError';

const handleJoiError = (error: ErrorReport[]): Error => {
  const [{ code }] = error;
  const [err] = error;
  if (code === 'any.required') {
    return err;
  } if (code === 'string.min') {
    const message = `"${err.path[0]}" length must be at least 3 characters long`;
    return new CustomError('UnprocessableEntityError', message);
  } if (code === 'string.base') {
    const message = `"${err.path[0]}" must be a string`;
    return new CustomError('UnprocessableEntityError', message);
  }
  return new CustomError('UnauthorizedError', 'Username or password invalid');
};

export default handleJoiError;