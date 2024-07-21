import { eq } from 'drizzle-orm';
import { Inject, Service } from 'typedi';
import { compare, genSalt, hash } from 'bcrypt';
import * as jose from 'jose';

import type { Logger } from 'winston';
import type { InferInsertModel } from 'drizzle-orm';
import type { Database } from '@/loaders/supabase';

import { config } from '@/config';
import { users } from '@/models/user';
import { DATABASE_KEY, LOGGER_KEY } from '@/loaders/dependency-injector';

@Service()
export class AuthService {
  private SALT_ROUNDS = 10;

  constructor(
    @Inject(LOGGER_KEY) private logger: Logger,
    @Inject(DATABASE_KEY) private database: Database
  ) {}

  public async signUp(user: InferInsertModel<typeof users>) {
    this.logger.silly('Hashing password');
    const salt = await genSalt(this.SALT_ROUNDS);
    const hashedPassword = await hash(user.password, salt);

    this.logger.silly('Inserting user into database');
    const res = await this.database
      .insert(users)
      .values({
        ...user,
        password: hashedPassword,
      })
      .onConflictDoNothing({ target: users.id })
      .returning();

    const userRecord = res.at(0);
    if (!userRecord) {
      throw new Error('User already exists or cannot be created');
    }

    this.logger.silly('Generating token');
    const token = await this.generateToken(user);

    return { user, token };
  }

  public async signIn(username: string, password: string) {
    const res = await this.database
      .select()
      .from(users)
      .where(eq(users.username, username));
    const user = res.at(0);
    if (!user) {
      throw new Error('User not found');
    }

    this.logger.silly('Verifying password');
    const isSame = await compare(password, user.password);

    console.log(isSame);

    if (!isSame) {
      throw new Error('Invalid password');
    }

    this.logger.silly('Password valid');
    this.logger.silly('Generating JWT');
    const token = await this.generateToken(user);
    return { user, token };
  }

  private generateToken(user: InferInsertModel<typeof users>) {
    const secret = new TextEncoder().encode(config.jwtSecret);
    const alg = 'HS256';

    return new jose.SignJWT({ 'urn:example:claim': user.username })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setIssuer('urn:example:issuer')
      .setAudience('urn:example:audience')
      .setExpirationTime('12h')
      .sign(secret);
  }
}
