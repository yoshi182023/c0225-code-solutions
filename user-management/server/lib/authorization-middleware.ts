/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ClientError } from './client-error.js';

const hashKey = process.env.TOKEN_SECRET ?? '';
if (!hashKey) throw new Error('TOKEN_SECRET not found in env');

// the middleware function defined in lib/error-middleware.ts
// now handles errors caused by attempting to verify invalid JSON Web Tokens.
export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  /* your code here */
  const auth = req.get('authorization');
  // The format of the header is Bearer TOKEN
  if (!auth) throw new ClientError(401, 'authorization required ');
  //   Get the 'Authorization' header from the request.
  //  * Parse the token from the header; e.g., auth.split('Bearer ')[1]
  // the token will be in the header
  const token = auth.split('Bearer ')[1];
  //    * Note: the space after `Bearer` is important.
  //  * If no header or no token is provided,
  //  *   throw a 401 error with the message 'authentication required'
  if (!token) throw new ClientError(401, 'authorization required');
  const payload = jwt.verify(token, hashKey);
  req.user = payload as Request['user'];
  next(); // it doesn't send a request back

  // Call next() (with no arguments) to let Express know to advance to its next route or middleware.
}

// usually put the token in the header
/*
 * Use jwt.verify() to verify the authenticity of the token and extract its payload.
 * Note: You need the TOKEN_SECRET (see `hashKey` above).
 * Assign the extracted payload to the user property of the req object.
 * Note: The TypeScript for this assignment is best written with a type assertion:
 *   req.user = payload as Request['user'];
 *
 * References:
 * https://expressjs.com/en/4x/api.html#req.get
 * https://nodejs.org/api/http.html#http_message_headers
 * https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
