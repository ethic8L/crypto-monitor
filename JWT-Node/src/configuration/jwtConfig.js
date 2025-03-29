import crypto from 'crypto';

// generate a random secret key
export const secretKey = crypto.randomBytes(32).toString('hex');

