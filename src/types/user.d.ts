declare namespace Express {
  interface Request {
    user?: {
      id: number;
      permissions: string | string[] | string[][];
      iat: number;
      exp: number;
    };
  }
}
