import { Request, Response, NextFunction } from 'express';

type ErrorProps = {
  code: number,
  message?: string
};

const errors: Record<string, ErrorProps> = {
  ValidationError: { code: 400 },
  JsonWebTokenError: { 
    code: 401, 
    message: 'Expired or invalid token',
  },
  UnauthorizedError: { code: 401 },
  NotFoundError: { code: 404 },
  ConflictError: { code: 409 },
  UnprocessableEntityError: { code: 422 },
};

const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { name } = err;
  if (errors[name]) {
    const message = errors[name].message || err.message;
    res.status(errors[name].code).json({ message });
  }
  res.status(500).send({ message: err.message });
};

export default errorHandler;
