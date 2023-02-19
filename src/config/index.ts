import * as dotenv from 'dotenv';

dotenv.config();

export * from './express';
export const isDev = process.env.NODE_ENV === 'development';
