import * as crypto from 'node:crypto';
import { promisify } from 'util';

const scrypt = promisify(crypto.scrypt);

/**
 * Generates a hash from a password raw string using crypto's scrypt function.
 */
export async function generateHash(
  password: string,
  salt: string
): Promise<string> {
  return ((await scrypt(password, salt, 64)) as Buffer).toString('hex');
}

/**
 * Compares raw password with a password hash using crypto's scrypt function.
 */
export async function verifyHash(
  passwordRaw: string,
  passwordHash: string,
  salt: string
): Promise<boolean> {
  const passwordHashBuffer = Buffer.from(passwordHash, 'hex');
  const passwordRawBuffer = (await scrypt(passwordRaw, salt, 64)) as Buffer;
  return crypto.timingSafeEqual(passwordHashBuffer, passwordRawBuffer);
}
