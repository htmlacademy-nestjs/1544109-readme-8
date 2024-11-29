import { Entity, StorableEntity, AuthUser } from '@project/shared/core';
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './blog-user.constant';

export class BlogUserEntity extends Entity implements StorableEntity<AuthUser> {
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  passwordHash: string;

  constructor(user: AuthUser) {
    super();

    this.id = user.id || ''; // NOTE: calling setter from abstract class Entity
    this.email = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.avatar = user.avatar;
    this.passwordHash = user.passwordHash;
  }

  toPOJO(): AuthUser {
    return {
      id: this.id,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      avatar: this.avatar,
      passwordHash: this.passwordHash,
    }
  }

  async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);

    this.passwordHash = await hash(password, salt);

    return this;
  }

  async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}