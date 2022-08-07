import { sign, verify } from 'jsonwebtoken';

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
  generateToken: (payload: Payload) => sign(payload, secret, jwtConfig),
    
  verifyToken: (token: string) => verify(token, secret),
};

export default authService;