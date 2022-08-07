import { sign, verify } from 'jsonwebtoken';
import { loginSchema } from './validationsSchemas';

const secret = 'mysecret';

const jwtConfig: Record<string, string> = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

type Payload = {
  username: string,
  password:string
}; 

const authService = {
  validateLoginBody: async (login: Payload) => {
    await loginSchema.validateAsync(login);
  },
  
  generateToken: (payload: Payload) => sign(payload, secret, jwtConfig),
    
  verifyToken: (token: string) => verify(token, secret),
};

export default authService;